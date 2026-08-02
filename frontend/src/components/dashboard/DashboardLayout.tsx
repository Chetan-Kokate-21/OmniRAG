interface Props {
  sidebar: React.ReactNode;
  header: React.ReactNode;
  children: React.ReactNode;
}

export default function DashboardLayout({
  sidebar,
  header,
  children,
}: Props) {
  return (
    <div className="flex min-h-screen bg-slate-950">

      {sidebar}

      <div className="flex flex-1 flex-col">

        {header}

        <main className="flex-1 p-8">
          {children}
        </main>

      </div>

    </div>
  );
}