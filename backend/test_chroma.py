import uuid

from app.ai.pipeline.document_processor import DocumentProcessor
from app.ai.vectorstore.vector_store import VectorStore

processor = DocumentProcessor()

result = processor.process(
    "uploads/documents/396cb195-2da4-4b09-84f9-68cb33f383ae.pdf"
)

chunks = result["chunks"]
embeddings = result["embeddings"]

vector_store = VectorStore()

ids = [
    str(uuid.uuid4())
    for _ in chunks
]

metadatas = [
    {
        "source": "YOUR_FILE.pdf",
        "chunk": i,
    }
    for i in range(len(chunks))
]

vector_store.add_documents(
    ids=ids,
    documents=chunks,
    embeddings=embeddings,
    metadatas=metadatas,
)

print()

print("===================================")
print("Stored Successfully!")
print("Chunks:", len(chunks))
print("===================================")