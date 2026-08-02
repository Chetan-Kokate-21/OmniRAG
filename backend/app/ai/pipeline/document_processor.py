from pathlib import Path

from app.ai.chunking.text_splitter import TextChunker
from app.ai.embeddings.embedding_service import EmbeddingService
from app.ai.loaders.pdf_loader import PDFLoader


class DocumentProcessor:
    """
    Complete document processing pipeline.
    """

    def __init__(self):
        self.loader = PDFLoader()
        self.chunker = TextChunker()
        self.embedding_service = EmbeddingService()

    def process(
        self,
        pdf_path: str | Path,
    ) -> dict:
        """
        Process a PDF from start to finish.
        """

        # Step 1
        text = self.loader.extract_text(pdf_path)

        # Step 2
        chunks = self.chunker.split_text(text)

        # Step 3
        embeddings = self.embedding_service.embed_documents(chunks)

        return {
        "text": text,
        "chunks": chunks,
        "embeddings": embeddings,
        "total_chunks": len(chunks),
    }