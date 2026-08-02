from app.ai.rag.retriever import Retriever

retriever = Retriever()

results = retriever.retrieve(
    "What is EVisionAI?"
)

print("=" * 60)
print("Top Retrieved Chunks")
print("=" * 60)

documents = results["documents"][0]
metadatas = results["metadatas"][0]
distances = results["distances"][0]

for i in range(len(documents)):
    print(f"\nResult {i+1}")
    print("-" * 50)

    print("Distance :", distances[i])
    print("Metadata :", metadatas[i])

    print("\nContent:\n")

    print(documents[i][:500])