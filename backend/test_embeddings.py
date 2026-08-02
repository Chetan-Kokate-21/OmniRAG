from app.ai.chunking.text_splitter import TextChunker
from app.ai.embeddings.embedding_service import EmbeddingService
from app.ai.loaders.pdf_loader import PDFLoader

pdf_path = "uploads/documents/396cb195-2da4-4b09-84f9-68cb33f383ae.pdf"

text = PDFLoader.extract_text(pdf_path)

chunker = TextChunker()

chunks = chunker.split_text(text)

print("Chunks:", len(chunks))

embedding_service = EmbeddingService()

embeddings = embedding_service.embed_documents(chunks)

print("Embeddings:", len(embeddings))
print("Embedding Dimension:", len(embeddings[0]))

print("\nFirst 10 values of first embedding:\n")

print(embeddings[0][:10])