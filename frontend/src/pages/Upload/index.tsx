import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UploadCloud, FileText } from "lucide-react";

import api from "../../lib/axios";

export default function Upload() {
  const navigate = useNavigate();

  const [file, setFile] = useState<File>();

  const [loading, setLoading] = useState(false);

  async function upload() {
    if (!file) {
      alert("Please choose a PDF.");
      return;
    }

    setLoading(true);

    const formData = new FormData();

    formData.append("file", file);

    try {
      await api.post(
        "/documents/upload",
        formData
      );

      alert("Upload Successful");

      navigate("/documents");

    } catch {

      alert("Upload Failed");

    }

    setLoading(false);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950">

      <div className="w-[650px] rounded-2xl bg-slate-900 p-10 shadow-2xl">

        <div className="mb-10 text-center">

          <UploadCloud
            size={70}
            className="mx-auto mb-5 text-indigo-500"
          />

          <h1 className="text-4xl font-bold text-white">
            Upload PDF
          </h1>

          <p className="mt-3 text-slate-400">
            Upload your document and chat with AI
          </p>

        </div>

        <label
          className="
          flex
          cursor-pointer
          flex-col
          items-center
          justify-center
          rounded-xl
          border-2
          border-dashed
          border-slate-700
          p-12
          transition
          hover:border-indigo-500
          "
        >

          <FileText
            size={45}
            className="mb-4 text-indigo-400"
          />

          <p className="text-white">

            {file
              ? file.name
              : "Choose a PDF"}

          </p>

          <input
            type="file"
            accept=".pdf"
            hidden
            onChange={(e) =>
              setFile(
                e.target.files?.[0]
              )
            }
          />

        </label>

        <button
          disabled={loading}
          onClick={upload}
          className="
          mt-8
          w-full
          rounded-xl
          bg-indigo-600
          py-4
          text-lg
          font-semibold
          text-white
          transition
          hover:bg-indigo-700
          "
        >
          {loading
            ? "Uploading..."
            : "Upload PDF"}
        </button>

      </div>

    </main>
  );
}