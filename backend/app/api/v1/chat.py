from fastapi import APIRouter, Depends

from app.dependencies import get_current_user
from app.models.user import User

from app.schemas.chat import ChatRequest, ChatResponse
from app.services.chat_service import ChatService

router = APIRouter()

chat_service = ChatService()


@router.post(
    "/chat",
    response_model=ChatResponse,
)
def chat(
    request: ChatRequest,
    current_user: User = Depends(get_current_user),
):
    return chat_service.ask(
        session_id=request.session_id,
        user_id=str(current_user.id),
        document_id=request.document_id,
        question=request.question,
        top_k=request.top_k,
    )