from pydantic import BaseModel
from datetime import datetime


class ConversationMessage(BaseModel):
    role: str
    content: str
    timestamp: datetime