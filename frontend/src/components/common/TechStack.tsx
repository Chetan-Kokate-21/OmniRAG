import {
  Database,
  Brain,
  Server,
  Boxes,
  Cpu,
  Cloud,
} from "lucide-react";

const technologies = [
  {
    icon: Server,
    title: "FastAPI",
    description: "Backend API",
  },
  {
    icon: Database,
    title: "PostgreSQL",
    description: "Database",
  },
  {
    icon: Boxes,
    title: "Pinecone",
    description: "Vector Store",
  },
  {
    icon: Brain,
    title: "Gemini AI",
    description: "LLM",
  },
  {
    icon: Cpu,
    title: "React",
    description: "Frontend",
  },
  {
    icon: Cloud,
    title: "Docker",
    description: "Deployment",
  },
];

export default function TechStack() {
  return (
    <section
      id="tech"
      className="border-y border-slate-800 bg-slate-950 py-20"
    >
      <div className="mx-auto max-w-7xl px-8">

        <h2 className="mb-12 text-center text-4xl font-bold text-white">
          Powered by Modern Technologies
        </h2>

        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-6">
          {technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500"
              >
                <Icon
                  className="mx-auto mb-4 text-cyan-400"
                  size={36}
                />

                <h3 className="font-semibold text-white">
                  {tech.title}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  {tech.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}