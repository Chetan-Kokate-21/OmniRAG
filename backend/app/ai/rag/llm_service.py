from google import genai

from app.config.settings import settings


class LLMService:
    """
    Wrapper around Google's Gemini API.
    """

    def __init__(self):
        self.client = genai.Client(
            api_key=settings.google_api_key
        )

        # You can also move this into settings.py later
        self.model = settings.llm_model

    def generate(self, prompt: str) -> str:
        """
        Generate an answer using Gemini.
        """

        response = self.client.models.generate_content(
            model=self.model,
            contents=prompt,
        )

        return response.text