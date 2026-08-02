"""
Database initialization utilities.
"""

from sqlalchemy import text

from app.database.session import engine


async def test_database_connection() -> None:
    """
    Test the database connection.
    """

    async with engine.begin() as connection:
        await connection.execute(text("SELECT 1"))

    print("✅ Database connected successfully!")