from app.ai.rag.rag_service import RAGService

rag = RAGService()

response = rag.answer(
    "What is EVisionAI?"
)

print("=" * 80)
print("QUESTION")
print("=" * 80)
print(response["question"])

print("\n")

print("=" * 80)
print("ANSWER")
print("=" * 80)
print(response["answer"])

print("\n")

print("=" * 80)
print("SOURCES")
print("=" * 80)

for source in response["sources"]:
    print(source)