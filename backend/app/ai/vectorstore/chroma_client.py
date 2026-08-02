from chromadb import PersistentClient


class ChromaClient:
    """
    Singleton ChromaDB client.
    """

    _client = None

    @classmethod
    def get_client(cls):
        if cls._client is None:
            cls._client = PersistentClient(
                path="chroma_db"
            )

        return cls._client