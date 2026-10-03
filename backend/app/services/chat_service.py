from app.ai.rag.rag_service import RAGService
from app.services.conversation_service import ConversationService


class ChatService:

    def __init__(self):
        self.rag = RAGService()
        self.conversation = ConversationService()

    def ask(
    self,
    session_id: str,
    user_id: str,
    document_id: str,
    question: str,
    top_k: int = 5,
    ):
        self.conversation.add_message(
            session_id=session_id,
            role="user",
            content=question,
        )

        response = self.rag.answer(
            user_id=user_id,
            document_id=document_id,
            question=question,
            top_k=top_k,
        )

        self.conversation.add_message(
            session_id=session_id,
            role="assistant",
            content=response["answer"],
        )

        return response