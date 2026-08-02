from app.ai.rag.prompt_builder import PromptBuilder
from app.ai.rag.retriever import Retriever

retriever = Retriever()

results = retriever.retrieve(
    "What is EVisionAI?"
)

contexts = results["documents"][0]

prompt = PromptBuilder.build(
    question="What is EVisionAI?",
    contexts=contexts,
)

print("=" * 80)
print(prompt)