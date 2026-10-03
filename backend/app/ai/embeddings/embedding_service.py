from google import genai
from google.genai import types

from app.config.settings import settings


class EmbeddingService:
    def __init__(self):
        self.client = genai.Client(
            api_key=settings.google_api_key
        )

        self.model_name = settings.embedding_model
        self.output_dimensionality = settings.embedding_dimension

    def embed_documents(
        self,
        chunks: list[str]
    ) -> list[list[float]]:

        if not chunks:
            return []

        all_embeddings = []

        for index, chunk in enumerate(chunks):

            result = self.client.models.embed_content(
                model=self.model_name,
                contents=chunk,
                config=types.EmbedContentConfig(
                    output_dimensionality=self.output_dimensionality
                ),
            )

            embedding = result.embeddings[0].values

            all_embeddings.append(embedding)

            print(
                f"Embedded {index + 1}/{len(chunks)} chunks"
            )

        if len(all_embeddings) != len(chunks):
            raise ValueError(
                f"Embedding count mismatch: "
                f"{len(chunks)} chunks but "
                f"{len(all_embeddings)} embeddings generated."
            )

        return all_embeddings

    def embed_query(
        self,
        query: str
    ) -> list[float]:

        result = self.client.models.embed_content(
            model=self.model_name,
            contents=query,
            config=types.EmbedContentConfig(
                output_dimensionality=self.output_dimensionality
            ),
        )

        return result.embeddings[0].values