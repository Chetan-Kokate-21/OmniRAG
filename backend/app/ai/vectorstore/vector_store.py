from pinecone import Pinecone

from app.config.settings import settings


class VectorStore:
    """
    Pinecone vector database wrapper.
    """

    def __init__(
        self,
        index_name: str | None = None,
    ):
        self.index_name = index_name or settings.pinecone_index_name

        self.client = Pinecone(
            api_key=settings.pinecone_api_key
        )

        self.index = self.client.Index(
            self.index_name
        )

    def add_documents(
        self,
        ids: list[str],
        documents: list[str],
        embeddings: list[list[float]],
        metadatas: list[dict],
    ):
        vectors = []

        for i in range(len(ids)):
            vectors.append(
                {
                    "id": ids[i],
                    "values": embeddings[i],
                    "metadata": {
                        **metadatas[i],
                        "text": documents[i],
                    },
                }
            )

        self.index.upsert(
            vectors=vectors
        )

    def search(
        self,
        query_embedding: list[float],
        user_id: str,
        document_id: str,
        n_results: int = 5,
    ):
        result = self.index.query(
            vector=query_embedding,
            top_k=n_results,
            include_metadata=True,
            include_values=False,
            filter={
                "$and": [
                    {
                        "user_id": {
                            "$eq": user_id
                        }
                    },
                    {
                        "document_id": {
                            "$eq": document_id
                        }
                    },
                ]
            },
        )

        return result

    def delete_document(
        self,
        document_id: str,
    ):
        """
        Delete all vectors belonging to a document.
        """

        self.index.delete(
            filter={
                "document_id": {
                    "$eq": document_id
                }
            }
        )