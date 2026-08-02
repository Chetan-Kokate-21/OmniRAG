"""
Common API response schemas used across the application.
"""

from typing import Any

from pydantic import BaseModel, Field


class ApiResponse(BaseModel):
    """
    Standard response model for all API endpoints.
    """

    success: bool = Field(
        ...,
        description="Indicates whether the request was successful.",
    )

    message: str = Field(
        ...,
        description="Human-readable response message.",
    )

    data: Any | None = Field(
        default=None,
        description="Optional payload returned by the API.",
    )