import { Bell, UserCircle, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-slate-900 px-8">

      <div>
        <h2 className="text-3xl font-bold text-white">
          Dashboard
        </h2>

        <p className="text-slate-400">
          Welcome back 👋
        </p>
      </div>

      <div className="flex items-center gap-4">

        <button
          onClick={() => navigate("/upload")}
          className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-700"
        >
          <Upload size={18} />
          Upload PDF
        </button>

        <Bell
          className="cursor-pointer text-slate-400 hover:text-white"
          size={22}
        />

        <UserCircle
          className="cursor-pointer text-slate-400 hover:text-white"
          size={36}
        />

      </div>

    </header>
  );
}