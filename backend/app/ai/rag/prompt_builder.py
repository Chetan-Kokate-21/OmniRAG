class PromptBuilder:
    """
    Build prompts for Retrieval-Augmented Generation.
    """

    @staticmethod
    def build(
        question: str,
        contexts: list[str],
    ) -> str:
        """
        Build a grounded prompt for the LLM.
        """

        context = "\n\n".join(contexts)

        prompt = f"""
You are OmniRAG AI, an intelligent document assistant.

Use ONLY the information provided in the context below.

If the answer is not present in the context, reply exactly:

"I couldn't find the answer in the uploaded documents."

-----------------------
Context
-----------------------

{context}

-----------------------
Question
-----------------------

{question}

-----------------------
Answer
-----------------------
"""

        return prompt.strip()