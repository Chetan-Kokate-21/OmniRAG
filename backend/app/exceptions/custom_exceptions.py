"""
Custom exception classes for OmniRAG AI.
"""


class OmniRAGException(Exception):
    """
    Base application exception.
    """

    def __init__(self, message: str):
        self.message = message
        super().__init__(message)