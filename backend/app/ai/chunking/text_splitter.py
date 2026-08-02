from langchain_text_splitters import RecursiveCharacterTextSplitter


class TextChunker:
    """
    Split extracted text into semantic chunks.
    """

    def __init__(
        self,
        chunk_size: int = 1000,
        chunk_overlap: int = 200,
    ):
        self.splitter = RecursiveCharacterTextSplitter(
            chunk_size=chunk_size,
            chunk_overlap=chunk_overlap,
            separators=[
                "\n\n",
                "\n",
                ". ",
                " ",
                "",
            ],
        )

    def split_text(self, text: str) -> list[str]:
        """
        Split text into chunks.
        """

        return self.splitter.split_text(text)