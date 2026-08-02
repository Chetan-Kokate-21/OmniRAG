from app.ai.pipeline.document_processor import DocumentProcessor

processor = DocumentProcessor()

result = processor.process(
    "uploads/documents/396cb195-2da4-4b09-84f9-68cb33f383ae.pdf"
)

print("=" * 60)
print("Document Processing Pipeline")
print("=" * 60)

print("Characters :", len(result["text"]))
print("Chunks     :", len(result["chunks"]))
print("Embeddings :", len(result["embeddings"]))
print("Dimension  :", len(result["embeddings"][0]))

print("\nFirst Chunk:\n")
print(result["chunks"][0][:500])