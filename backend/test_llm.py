from app.ai.rag.llm_service import LLMService

llm = LLMService()

response = llm.generate(
    "Explain Machine Learning in one sentence."
)

print(response)