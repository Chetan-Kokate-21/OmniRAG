import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function PipelineCard({
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <div
      className="
        relative
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/60
        p-6
        text-center
        transition
        duration-300
        hover:border-cyan-500
        hover:-translate-y-1
      "
    >
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">
        <Icon
          size={32}
          className="text-cyan-400"
        />
      </div>

      <h3 className="text-xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-400">
        {description}
      </p>
    </div>
  );
}