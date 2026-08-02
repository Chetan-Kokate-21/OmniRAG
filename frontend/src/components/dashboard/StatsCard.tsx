interface Props {
  title: string;
  value: string;
  subtitle?: string;
}
export default function StatsCard({
  title,
  value,
  subtitle,
}: Props) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">

      <p className="text-slate-400">
        {title}
      </p>

      <h2 className="mt-3 text-3xl font-bold text-white">
        {value}
      </h2>

      {subtitle && (
        <p className="mt-2 text-slate-500">
            {subtitle}
        </p>
        )}

    </div>
  );
}