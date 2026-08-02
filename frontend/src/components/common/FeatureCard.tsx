import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/60
        p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-indigo-500
        hover:shadow-[0_0_30px_rgba(99,102,241,0.25)]
      "
    >
      <div className="mb-6 inline-flex rounded-xl bg-indigo-500/15 p-4">
        <Icon
          size={32}
          className="text-cyan-400"
        />
      </div>

      <h3 className="mb-3 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="leading-7 text-slate-400">
        {description}
      </p>
    </div>
  );
}