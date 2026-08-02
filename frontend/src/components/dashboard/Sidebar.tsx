import {
  Upload,
  FileText,
  MessageSquare,
  Settings,
  LogOut,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

export default function Sidebar() {
  const navigate = useNavigate();

  const logout = useAuthStore(
    (state) => state.logout
  );

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <aside className="flex w-72 flex-col border-r border-slate-800 bg-slate-900">

      <div className="border-b border-slate-800 p-8">

        <h1 className="text-3xl font-bold text-white">
          OmniRAG
        </h1>

        <p className="mt-2 text-slate-400">
          AI Workspace
        </p>

      </div>

  <nav className="flex-1 space-y-3 p-6">

  <button
    onClick={() => navigate("/upload")}
    className="flex w-full items-center gap-4 rounded-xl p-4 text-left text-white transition hover:bg-slate-800"
  >
    <Upload />
    Upload PDF
  </button>

  <button
    onClick={() => navigate("/documents")}
    className="flex w-full items-center gap-4 rounded-xl p-4 text-left text-white transition hover:bg-slate-800"
  >
    <FileText />
    Documents
  </button>

  <button
    onClick={() => navigate("/chat")}
    className="flex w-full items-center gap-4 rounded-xl p-4 text-left text-white transition hover:bg-slate-800"
  >
    <MessageSquare />
    Chats
  </button>

  <button
    onClick={() => alert("Settings coming soon")}
    className="flex w-full items-center gap-4 rounded-xl p-4 text-left text-white transition hover:bg-slate-800"
  >
    <Settings />
    Settings
  </button>

</nav>

      <div className="border-t border-slate-800 p-6">

        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-4 rounded-xl p-4 text-red-400 transition hover:bg-red-500/10"
        >
          <LogOut />
          Logout
        </button>

      </div>

    </aside>
  );
}