import {
  Upload,
  FileText,
  Scissors,
  Brain,
  Database,
  Search,
  Sparkles,
  ArrowDown,
} from "lucide-react";

import PipelineCard from "./PipelineCard";

const steps = [
  {
    icon: Upload,
    title: "Upload PDF",
    description:
      "Users securely upload PDF documents.",
  },
  {
    icon: FileText,
    title: "Extract Text",
    description:
      "PyMuPDF extracts clean document text.",
  },
  {
    icon: Scissors,
    title: "Chunking",
    description:
      "Large documents are split into semantic chunks.",
  },
  {
    icon: Brain,
    title: "Embeddings",
    description:
      "Sentence Transformers create vector embeddings.",
  },
  {
    icon: Database,
    title: "pinecone",
    description:
      "Embeddings are stored for semantic search.",
  },
  {
    icon: Search,
    title: "Retriever",
    description:
      "Relevant chunks are selected for each question.",
  },
  {
    icon: Sparkles,
    title: "Gemini AI",
    description:
      "The retrieved context is used to generate answers.",
  },
];

export default function Pipeline() {
  return (
    <section className="bg-slate-950 py-28">
      <div className="mx-auto max-w-6xl px-8">

        <div className="mb-20 text-center">

          <h2 className="text-5xl font-black text-white">
            How OmniRAG Works
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-400">
            Every answer follows a complete Retrieval-Augmented
            Generation pipeline built entirely from scratch.
          </p>

        </div>

        <div className="space-y-10">

          {steps.map((step, index) => (
            <div key={step.title}>

              <PipelineCard {...step} />

              {index !== steps.length - 1 && (
                <div className="my-5 flex justify-center">
                  <ArrowDown
                    className="animate-bounce text-indigo-400"
                    size={34}
                  />
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}