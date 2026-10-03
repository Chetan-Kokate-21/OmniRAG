from app.ai.embeddings.embedding_service import EmbeddingService
from app.ai.vectorstore.vector_store import VectorStore


class Retriever:
    """
    Retrieve relevant chunks from Pinecone.
    """

    def __init__(self):
        self.embedding_service = EmbeddingService()
        self.vector_store = VectorStore()

    def retrieve(
        self,
        query: str,
        user_id: str,
        document_id: str,
        top_k: int = 5,
    ):
        query_embedding = self.embedding_service.embed_query(
            query
        )

        results = self.vector_store.search(
            query_embedding=query_embedding,
            user_id=user_id,
            document_id=document_id,
            n_results=top_k,
        )

        matches = getattr(results, "matches", [])

        formatted_results = []

        for match in matches:
            metadata = dict(
                getattr(match, "metadata", {}) or {}
            )

            content = metadata.pop(
                "text",
                ""
            )

            score = getattr(
                match,
                "score",
                0.0
            )

            formatted_results.append(
                {
                    "content": content,
                    "metadata": metadata,
                    "score": round(float(score), 4),
                }
            )

        return formatted_results