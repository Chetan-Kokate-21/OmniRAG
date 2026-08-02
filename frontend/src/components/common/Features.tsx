import {
  FileText,
  Search,
  BrainCircuit,
  ShieldCheck,
  MessageSquare,
  Zap,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: FileText,
    title: "Multi PDF Upload",
    description:
      "Upload and organize multiple documents for intelligent retrieval.",
  },
  {
    icon: Search,
    title: "Semantic Search",
    description:
      "ChromaDB retrieves the most relevant chunks using vector similarity.",
  },
  {
    icon: BrainCircuit,
    title: "Gemini Powered",
    description:
      "Generate accurate responses using Retrieval-Augmented Generation.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Authentication",
    description:
      "JWT authentication ensures every user's documents remain isolated.",
  },
  {
    icon: MessageSquare,
    title: "Conversation Memory",
    description:
      "Maintain context across multiple questions in the same chat session.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description:
      "FastAPI, async architecture, and optimized retrieval for quick responses.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-slate-950 py-28"
    >
      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-16 text-center">

          <h2 className="text-5xl font-black text-white">
            Why Choose OmniRAG?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-400">
            Built with enterprise-grade technologies to provide
            secure, intelligent and scalable document retrieval.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}

        </div>

      </div>
    </section>
  );
}