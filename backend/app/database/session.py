"""
Database session configuration for OmniRAG AI.
"""

from sqlalchemy.ext.asyncio import (
    AsyncSession,
    async_sessionmaker,
    create_async_engine,
)

from app.config.settings import settings

# Create Async SQLAlchemy Engine
engine = create_async_engine(
    settings.database_url,
    echo=settings.debug,
)

# Create Session Factory
AsyncSessionLocal = async_sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False,
)