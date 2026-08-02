from app.ai.vectorstore.chroma_client import ChromaClient


class VectorStore:
    """
    ChromaDB wrapper.
    """

    def __init__(
        self,
        collection_name: str = "documents",
    ):
        self.client = ChromaClient.get_client()

        self.collection = self.client.get_or_create_collection(
            name=collection_name,
        )

    def add_documents(
        self,
        ids: list[str],
        documents: list[str],
        embeddings: list[list[float]],
        metadatas: list[dict],
    ):
        self.collection.add(
            ids=ids,
            documents=documents,
            embeddings=embeddings,
            metadatas=metadatas,
        )

    def search(
        self,
        query_embedding: list[float],
        user_id: str,
        document_id: str,
        n_results: int = 5,
    ):
        return self.collection.query(
            query_embeddings=[query_embedding],
            n_results=n_results,
            where={
                "$and": [
                    {
                        "user_id": user_id,
                    },
                    {
                        "document_id": document_id,
                    },
                ],
            },
            include=[
                "documents",
                "metadatas",
                "distances",
            ],
        )

    def delete_document(
        self,
        document_id: str,
    ):
        """
        Delete all chunks belonging to a document.
        """
        self.collection.delete(
            where={
                "document_id": document_id,
            }
        )