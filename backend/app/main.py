from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.v1.router import api_router
from app.config.settings import settings
from app.core.exception_handlers import register_exception_handlers
from app.core.logging import logger
from app.database.init_db import test_database_connection


@asynccontextmanager
async def lifespan(app: FastAPI):
    await test_database_connection()
    yield


app = FastAPI(
    title=settings.app_name,
    version=settings.app_version,
    description="Enterprise Multimodal RAG Platform",
    lifespan=lifespan,
)

# ----------------------------
# CORS
# ----------------------------

origins = [
    "http://localhost:5173",
    "https://omni-rag-ten.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ----------------------------
# Routes
# ----------------------------

app.include_router(
    api_router,
    prefix=settings.api_v1_prefix,
)

register_exception_handlers(app)

logger.info("OmniRAG AI application started successfully.")


@app.get("/", tags=["Root"])
async def root():
    return {
        "message": f"Welcome to {settings.app_name} 🚀"
    }