import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-40 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[140px]" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-8 text-center">

        <span className="mb-6 rounded-full border border-indigo-500/40 bg-indigo-500/10 px-5 py-2 text-sm text-indigo-300">
          🚀 AI Powered Retrieval Platform
        </span>

        <h1 className="max-w-5xl text-6xl font-black leading-tight md:text-7xl">
          Chat with your
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            {" "}Documents
          </span>
          <br />
          using AI
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-400">
          OmniRAG combines FastAPI, PostgreSQL,
          Pinecone and Gemini to provide secure,
          multi-user Retrieval-Augmented Generation.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">

  <div>
    <h2 className="text-4xl font-bold text-indigo-400">
      FastAPI
    </h2>
    <p className="text-slate-400">
      Backend
    </p>
  </div>

  <div>
    <h2 className="text-4xl font-bold text-cyan-400">
      Gemini
    </h2>
    <p className="text-slate-400">
      LLM
    </p>
  </div>

  <div>
    <h2 className="text-4xl font-bold text-green-400">
      Pinecone
    </h2>
    <p className="text-slate-400">
      Vector DB
    </p>
  </div>

  <div>
    <h2 className="text-4xl font-bold text-yellow-400">
      JWT
    </h2>
    <p className="text-slate-400">
      Secure Auth
    </p>
  </div>

</div>

          <Link
            to="/login"
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-7 py-4 font-semibold text-white transition hover:bg-indigo-500"
          >
            Get Started
            <ArrowRight size={20} />
          </Link>

          <a
            href="https://github.com/Chetan-Kokate-21"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl border border-slate-700 px-7 py-4 text-white transition hover:border-indigo-500"
          >
            <ExternalLink size={20} />
            View Project
          </a>

        </div>

      </div>

    </section>
  );
}