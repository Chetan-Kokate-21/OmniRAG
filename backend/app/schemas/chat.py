from pydantic import BaseModel, Field


class ChatRequest(BaseModel):
    session_id: str = Field(
        ...,
        description="Unique conversation session ID",
    )

    document_id: str = Field(
        ...,
        description="Selected document ID",
    )

    question: str = Field(
        ...,
        min_length=1,
        max_length=2000,
        description="User question",
    )

    top_k: int = Field(
        default=5,
        ge=1,
        le=10,
        description="Number of retrieved chunks",
    )


class SourceReference(BaseModel):
    filename: str | None = None
    chunk_index: int | None = None
    score: float


class ChatResponse(BaseModel):
    question: str
    answer: str
    sources: list[SourceReference]