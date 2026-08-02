"""
Health check endpoints for the OmniRAG AI application.
"""

from fastapi import APIRouter

from app.exceptions.custom_exceptions import OmniRAGException
from app.schemas.response import ApiResponse

router = APIRouter(
    prefix="/health",
    tags=["Health"],
)


@router.get(
    "/",
    response_model=ApiResponse,
    summary="Health Check",
)
async def health_check() -> ApiResponse:
    """
    Returns the current health status of the API.
    """

    return ApiResponse(
        success=True,
        message="OmniRAG AI API is running successfully.",
        data={
            "status": "healthy",
        },
    )


@router.get(
    "/test-error",
    summary="Test Global Exception Handler",
)
async def test_error():
    """
    Temporary endpoint used to verify the global exception handler.
    """

    raise OmniRAGException("This is a test exception.")