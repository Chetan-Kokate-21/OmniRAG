from app.ai.chunking.text_splitter import TextChunker
from app.ai.loaders.pdf_loader import PDFLoader

pdf_path = "uploads/documents/396cb195-2da4-4b09-84f9-68cb33f383ae.pdf"

text = PDFLoader.extract_text(pdf_path)

chunker = TextChunker()

chunks = chunker.split_text(text)

print("Total Chunks:", len(chunks))

for i, chunk in enumerate(chunks[:3]):
    print(f"\n------ Chunk {i+1} ------\n")
    print(chunk[:500])