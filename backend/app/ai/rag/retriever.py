from app.ai.embeddings.embedding_service import EmbeddingService
from app.ai.vectorstore.vector_store import VectorStore


class Retriever:
    """
    Retrieve relevant chunks from ChromaDB.
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
        query_embedding = self.embedding_service.embed_query(query)

        results = self.vector_store.search(
            query_embedding=query_embedding,
            user_id=user_id,
            document_id=document_id,
            n_results=top_k,
        )

        documents = results["documents"][0]
        metadatas = results["metadatas"][0]
        distances = results["distances"][0]

        formatted_results = []

        for document, metadata, distance in zip(
            documents,
            metadatas,
            distances,
        ):
            formatted_results.append(
                {
                    "content": document,
                    "metadata": metadata,
                    "score": round(1 - distance, 4),
                }
            )

        return formatted_results