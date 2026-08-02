from uuid import UUID

from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from jose import JWTError
from sqlalchemy.ext.asyncio import AsyncSession

from app.dependencies.database import get_db
from app.repositories.user_repository import UserRepository
from app.security.jwt import decode_access_token
from app.schemas import token

security = HTTPBearer()


async def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db: AsyncSession = Depends(get_db),
):
    """
    Return the currently authenticated user.
    """

    token = credentials.credentials

    token = credentials.credentials
    print("Received Token:", token)

    try:
        payload = decode_access_token(token)
        print("JWT Payload:", payload)
        print("User ID from token:", payload.get("sub"))
    except Exception as e:
        print("JWT ERROR:", repr(e))
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or expired token.",
        )
    user_id = payload.get("sub")

    if user_id is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token payload.",
        )

    repository = UserRepository(db)

    user = await repository.get_by_id(UUID(user_id))

    print("Database User:", user)
    if user is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="User not found.",
        )

    return user