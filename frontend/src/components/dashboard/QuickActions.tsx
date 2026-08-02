import {
  Upload,
  MessageSquarePlus,
  Settings,
} from "lucide-react";

export default function QuickActions() {
  const actions = [
    {
      title: "Upload PDF",
      icon: Upload,
    },
    {
      title: "New Chat",
      icon: MessageSquarePlus,
    },
    {
      title: "Settings",
      icon: Settings,
    },
  ];

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="mb-6 text-xl font-semibold text-white">
        Quick Actions
      </h2>

      <div className="space-y-4">

        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="flex w-full items-center gap-4 rounded-xl border border-slate-700 p-4 text-left text-white transition hover:border-indigo-500 hover:bg-slate-800"
            >
              <Icon size={22} />

              <span>{action.title}</span>
            </button>
          );
        })}

      </div>

    </div>
  );
}