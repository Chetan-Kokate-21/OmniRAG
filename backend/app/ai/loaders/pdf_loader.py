import fitz
from pathlib import Path


class PDFLoader:
    """
    Extract text from PDF files using PyMuPDF.
    """

    @staticmethod
    def extract_text(file_path: str | Path) -> str:
        """
        Extract all text from a PDF.
        """

        document = fitz.open(file_path)

        pages = []

        for page in document:
            pages.append(page.get_text())

        document.close()

        return "\n".join(pages)