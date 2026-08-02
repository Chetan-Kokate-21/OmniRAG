from pathlib import Path

from app.ai.loaders.pdf_loader import PDFLoader

pdf_path = Path("uploads/documents/e666a76f-77b2-4e1a-abfe-76d532ac1cc0.pdf")  # Replace with your UUID filename

print("File exists:", pdf_path.exists())
print("File size:", pdf_path.stat().st_size if pdf_path.exists() else "Not Found")

text = PDFLoader.extract_text(pdf_path)

print("Text length:", len(text))
print("-" * 50)
print(text[:1000])



