import { useDocuments } from "../../hooks/useDocuments";
import { useNavigate } from "react-router-dom";
import api from "../../lib/axios";

export default function Documents() {
  const navigate = useNavigate();

  const {
    data: documents,
    isLoading,
    error,
    refetch,
  } = useDocuments();

  async function deleteDocument(documentId: string) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this document?"
    );

    if (!confirmed) return;

    try {
      await api.delete(`/documents/${documentId}`);

      alert("Document deleted successfully.");

      // Refresh document list
      refetch();

    } catch (error) {
      console.error(error);
      alert("Failed to delete document.");
    }
  }

  if (isLoading) {
    return (
      <div className="p-8 text-white">
        Loading documents...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-red-400">
        Failed to load documents.
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 p-8">

      <h1 className="mb-8 text-4xl font-bold text-white">
        My Documents
      </h1>

      {documents?.length === 0 && (
        <div className="rounded-xl border border-slate-700 bg-slate-900 p-6 text-slate-400">
          No documents uploaded yet.
        </div>
      )}

      <div className="space-y-5">

        {documents?.map((document) => (

          <div
            key={document.id}
            className="rounded-xl border border-slate-700 bg-slate-900 p-6"
          >

            <h2 className="text-2xl font-semibold text-white">
              📄 {document.original_filename}
            </h2>

            <div className="mt-4 space-y-1 text-slate-400">

              <p>
                <strong>Status:</strong> {document.upload_status}
              </p>

              <p>
                <strong>Size:</strong>{" "}
                {(document.file_size / 1024 / 1024).toFixed(2)} MB
              </p>

              <p>
                <strong>Uploaded:</strong>{" "}
                {new Date(document.created_at).toLocaleString()}
              </p>

            </div>

            <div className="mt-6 flex gap-4">

              <button
                onClick={() =>
                  navigate(`/chat?documentId=${document.id}`)
                }
                className="rounded-lg bg-indigo-600 px-5 py-2 font-medium text-white hover:bg-indigo-500"
              >
                💬 Chat
              </button>

              <button
                onClick={() => deleteDocument(document.id)}
                className="rounded-lg bg-red-600 px-5 py-2 font-medium text-white hover:bg-red-500"
              >
                🗑 Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </main>
  );
}