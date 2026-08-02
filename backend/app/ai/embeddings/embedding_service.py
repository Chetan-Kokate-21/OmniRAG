from langchain_community.embeddings import HuggingFaceEmbeddings


class EmbeddingService:
    """
    Generate embeddings for text chunks.
    """

    def __init__(
        self,
        model_name: str = "BAAI/bge-small-en-v1.5",
    ):
        self.embedding_model = HuggingFaceEmbeddings(
            model_name=model_name,
        )

    def embed_documents(
        self,
        chunks: list[str],
    ) -> list[list[float]]:
        """
        Generate embeddings for multiple chunks.
        """
        return self.embedding_model.embed_documents(chunks)

    def embed_query(
        self,
        query: str,
    ) -> list[float]:
        """
        Generate embedding for a user query.
        """
        return self.embedding_model.embed_query(query)