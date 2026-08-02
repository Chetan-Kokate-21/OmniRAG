import { FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useDocuments } from "../../hooks/useDocuments";

export default function RecentDocuments() {

  const navigate = useNavigate();

  const {
    data: documents,
    isLoading,
  } = useDocuments();

  if (isLoading) {
    return null;
  }

  return (

    <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="mb-6 text-2xl font-semibold text-white">
        Recent Documents
      </h2>

      <div className="space-y-4">

        {documents?.slice(0,5).map((doc) => (

          <div
            key={doc.id}
            className="flex items-center justify-between rounded-xl border border-slate-800 p-4"
          >

            <div className="flex items-center gap-4">

              <FileText
                className="text-indigo-400"
              />

              <div>

                <p className="text-white font-semibold">

                  {doc.original_filename}

                </p>

                <p className="text-slate-400">

                  {new Date(
                    doc.created_at
                  ).toLocaleDateString()}

                </p>

              </div>

            </div>

            <button

              onClick={() =>
                navigate(
                  `/chat?documentId=${doc.id}`
                )
              }

              className="rounded-lg bg-indigo-600 px-4 py-2 text-white"

            >
              Open
            </button>

          </div>

        ))}

      </div>

    </div>

  );

}