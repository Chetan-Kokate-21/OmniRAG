from datetime import datetime


class ConversationService:
    """
    Stores conversation history in memory.
    Replace with a database implementation later.
    """

    def __init__(self):
        self.history = {}

    def add_message(
        self,
        session_id: str,
        role: str,
        content: str,
    ):
        if session_id not in self.history:
            self.history[session_id] = []

        self.history[session_id].append(
            {
                "role": role,
                "content": content,
                "timestamp": datetime.utcnow(),
            }
        )

    def get_history(
        self,
        session_id: str,
    ):
        return self.history.get(session_id, [])