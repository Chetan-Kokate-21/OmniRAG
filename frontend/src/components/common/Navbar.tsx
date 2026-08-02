import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        <div className="flex items-center gap-3">

    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-lg font-bold">
        O
    </div>

    <div>

        <h1 className="text-xl font-bold text-white">
            OmniRAG
        </h1>

        <p className="text-xs text-slate-400">
            AI Workspace
        </p>

    </div>

</div>

        <nav className="flex items-center gap-8">

          <a
            href="#features"
            className="text-slate-300 hover:text-white"
          >
            Features
          </a>

          <a
            href="#tech"
            className="text-slate-300 hover:text-white"
          >
            Tech Stack
          </a>

          <Link
            to="/login"
            className="rounded-xl bg-indigo-600 px-5 py-2 font-semibold text-white transition hover:bg-indigo-500"
          >
            Login
          </Link>

        </nav>

      </div>
    </header>
  );
}