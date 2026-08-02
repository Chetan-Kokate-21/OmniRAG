from sqlalchemy.orm import relationship
from sqlalchemy import Boolean, String
from sqlalchemy.orm import Mapped, mapped_column

from app.database.base import Base
from app.models.base_model import BaseModelMixin


class User(Base, BaseModelMixin):
    """
    User account model.
    """

    __tablename__ = "users"

    full_name: Mapped[str] = mapped_column(
        String(100),
        nullable=False,
    )

    email: Mapped[str] = mapped_column(
        String(255),
        unique=True,
        nullable=False,
        index=True,
    )

    hashed_password: Mapped[str] = mapped_column(
        String(255),
        nullable=False,
    )

    is_active: Mapped[bool] = mapped_column(
        Boolean,
        default=True,
    )

    is_admin: Mapped[bool] = mapped_column(
        Boolean,
        default=False,
    )
    
    documents = relationship(
    "Document",
    back_populates="user",
    cascade="all, delete-orphan",
    )