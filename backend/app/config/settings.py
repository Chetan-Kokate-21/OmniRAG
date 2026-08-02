from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str
    app_version: str
    debug: bool

    api_v1_prefix: str

    secret_key: str
    algorithm: str
    access_token_expire_minutes: int

    database_url: str

    upload_dir: str
    max_file_size_mb: int

    llm_provider: str

    llm_model: str

    google_api_key: str = ""

    mistral_api_key: str = ""

    embedding_model: str

    model_config = SettingsConfigDict(
        env_file=".env",
        extra="ignore"
    )


settings = Settings()