"""
Base class for all SQLAlchemy ORM models.
"""

from sqlalchemy.orm import DeclarativeBase


class Base(DeclarativeBase):
    """
    Base class inherited by all ORM models.
    """
    pass


# Import all models here so they are registered with Base.metadata
import app.models  # noqa: F401