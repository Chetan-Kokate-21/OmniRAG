from app.models.user import User
from app.repositories.user_repository import UserRepository
from app.schemas.user import UserCreate, UserLogin
from app.schemas.token import TokenResponse
from app.security.hashing import hash_password, verify_password
from app.security.jwt import create_access_token


class AuthService:
    """
    Business logic for authentication.
    """

    def __init__(self, repository: UserRepository):
        self.repository = repository

    async def register(self, user_data: UserCreate) -> User:
        """
        Register a new user.
        """

        existing_user = await self.repository.get_by_email(user_data.email)

        if existing_user:
            raise ValueError("Email is already registered.")

        user = User(
            full_name=user_data.full_name,
            email=user_data.email,
            hashed_password=hash_password(user_data.password),
        )

        return await self.repository.create(user)

    async def login(self, login_data: UserLogin) -> TokenResponse:
        """
        Authenticate a user and return a JWT.
        """

        user = await self.repository.get_by_email(login_data.email)

        if not user:
            raise ValueError("Invalid email or password.")

        if not verify_password(
            login_data.password,
            user.hashed_password,
        ):
            raise ValueError("Invalid email or password.")

        token = create_access_token(
            subject=str(user.id)
        )

        return TokenResponse(
            access_token=token
        )