from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse

from app.exceptions.custom_exceptions import OmniRAGException


def register_exception_handlers(app: FastAPI):

    @app.exception_handler(OmniRAGException)
    async def omnirag_exception_handler(
        request: Request,
        exc: OmniRAGException,
    ):
        return JSONResponse(
            status_code=400,
            content={
                "success": False,
                "message": exc.message,
                "data": None,
            },
        )