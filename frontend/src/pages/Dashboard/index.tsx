import DashboardLayout from "../../components/dashboard/DashboardLayout";
import Sidebar from "../../components/dashboard/Sidebar";
import Header from "../../components/dashboard/Header";

import StatsCard from "../../components/dashboard/StatsCard";
import RecentDocuments from "../../components/dashboard/RecentDocuments";

import { useDocuments } from "../../hooks/useDocuments";

export default function Dashboard() {
  const { data: documents } = useDocuments();

  const totalDocuments = documents?.length ?? 0;

  const totalStorage =
    documents?.reduce(
      (sum, document) => sum + document.file_size,
      0
    ) ?? 0;

  const storageMB = (
    totalStorage /
    1024 /
    1024
  ).toFixed(2);

  return (
    <DashboardLayout
      sidebar={<Sidebar />}
      header={<Header />}
    >
      <div className="grid grid-cols-4 gap-6">

        <StatsCard
          title="Documents"
          value={String(totalDocuments)}
          subtitle="Uploaded PDFs"
        />

        <StatsCard
          title="Vector DB"
          value="ChromaDB"
          subtitle="Semantic Search"
        />

        <StatsCard
          title="LLM"
          value="Gemini"
          subtitle="AI Assistant"
        />

        <StatsCard
          title="Storage"
          value={`${storageMB} MB`}
          subtitle="Used Space"
        />

      </div>

      <RecentDocuments />

    </DashboardLayout>
  );
}