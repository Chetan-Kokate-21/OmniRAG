export default function WelcomeCard() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-gradient-to-r from-indigo-600 to-cyan-500 p-10">

      <h1 className="text-5xl font-black text-white">
        Welcome to OmniRAG AI
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-white/80">
        Upload PDFs, retrieve knowledge with semantic search,
        and interact with your documents using Gemini AI.
      </p>

    </div>
  );
}