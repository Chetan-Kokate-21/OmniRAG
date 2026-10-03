import shutil
from pathlib import Path
from uuid import UUID, uuid4

from fastapi import UploadFile

from app.ai.pipeline.document_processor import DocumentProcessor
from app.ai.vectorstore.vector_store import VectorStore
from app.models.document import Document
from app.models.user import User
from app.repositories.document_repository import DocumentRepository

UPLOAD_DIRECTORY = Path("uploads/documents")
UPLOAD_DIRECTORY.mkdir(parents=True, exist_ok=True)


class DocumentService:
    """
    Business logic for document uploads.
    """

    def __init__(self, repository: DocumentRepository):
        self.repository = repository
        self.processor = DocumentProcessor()
        self.vector_store = VectorStore()

    async def upload_document(
        self,
        current_user: User,
        file: UploadFile,
    ) -> Document:

        if file.content_type != "application/pdf":
            raise ValueError("Only PDF files are allowed.")

        unique_filename = f"{uuid4()}.pdf"

        file_path = UPLOAD_DIRECTORY / unique_filename

        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        document = Document(
            user_id=current_user.id,
            filename=unique_filename,
            original_filename=file.filename,
            file_size=file.size or 0,
            file_type=file.content_type,
            upload_status="uploaded",
        )

        document = await self.repository.create(document)

        processing_result = self.processor.process(file_path)

        chunks = processing_result["chunks"]
        embeddings = processing_result["embeddings"]

        ids = []
        metadatas = []

        for index, chunk in enumerate(chunks):
            ids.append(str(uuid4()))

            metadatas.append(
                {
                    "document_id": str(document.id),
                    "user_id": str(current_user.id),
                    "filename": document.original_filename,
                    "stored_filename": document.filename,
                    "chunk_index": index,
                }
            )

        self.vector_store.add_documents(
            ids=ids,
            documents=chunks,
            embeddings=embeddings,
            metadatas=metadatas,
        )

        print(f"Stored {len(chunks)} chunks in Pinecone")

        return document

    async def get_user_documents(
        self,
        current_user: User,
    ) -> list[Document]:
        """
        Get all documents belonging to the current user.
        """
        return await self.repository.get_by_user(
            current_user.id
        )

    async def delete_document(
        self,
        document_id: UUID,
        current_user: User,
    ) -> None:
        """
        Delete document from database, Pinecone and local storage.
        """

        document = await self.repository.get_by_id(
            document_id
        )

        if document is None:
            raise ValueError("Document not found.")

        if document.user_id != current_user.id:
            raise ValueError(
                "You are not authorized to delete this document."
            )

        # Delete PDF from uploads folder
        file_path = UPLOAD_DIRECTORY / document.filename

        if file_path.exists():
            file_path.unlink()

        # Delete vectors from Pinecone
        self.vector_store.delete_document(
            str(document.id)
        )

        # Delete PostgreSQL record
        await self.repository.delete(document)