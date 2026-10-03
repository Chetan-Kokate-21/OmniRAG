from app.ai.rag.llm_service import LLMService
from app.ai.rag.prompt_builder import PromptBuilder
from app.ai.rag.retriever import Retriever


class RAGService:
    """
    End-to-end Retrieval-Augmented Generation pipeline.
    """

    def __init__(self):
        self.retriever = Retriever()
        self.prompt_builder = PromptBuilder()
        self.llm = LLMService()

    def answer(
    self,
    user_id: str,
    document_id: str,
    question: str,
    top_k: int = 5,
):
        retrieved = self.retriever.retrieve(
            query=question,
            user_id=user_id,
            document_id=document_id,
            top_k=top_k,
        )

        print("\n================ RETRIEVED CHUNKS ================\n")

        for i, item in enumerate(retrieved, start=1):
            print(f"\nChunk {i}")
            print("-" * 80)
            print(item["content"])
            print("-" * 80)
            print("Metadata:", item["metadata"])
            print("Score:", item["score"])

        contexts = [
            item["content"]
            for item in retrieved
        ]

        prompt = self.prompt_builder.build(
            question=question,
            contexts=contexts,
        )

        answer = self.llm.generate(prompt)

        return {
            "question": question,
            "answer": answer,
            "sources": [
                {
                    **item["metadata"],
                    "score": item["score"],
                }
                for item in retrieved
            ],
        }