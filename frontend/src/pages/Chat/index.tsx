import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Send } from "lucide-react";
import ReactMarkdown from "react-markdown";

import api from "../../lib/axios";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Chat() {
  const [searchParams] = useSearchParams();

  const documentId = searchParams.get("documentId");

  const [question, setQuestion] = useState("");

  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  async function askQuestion() {
    if (!question.trim()) return;

    if (!documentId) {
      alert("No document selected.");
      return;
    }

    const currentQuestion = question;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: currentQuestion,
      },
    ]);

    setQuestion("");

    setLoading(true);

    try {
      if (!documentId) {
        alert("No document selected.");
        return;
      }

      const response = await api.post("/chat", {
        session_id: "demo-session",
        document_id: documentId,
        question: currentQuestion,
        top_k: 5,
      });

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: response.data.answer,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong while querying the document.",
        },
      ]);
    }

    setLoading(false);
  }

  return (
    <main className="flex h-screen flex-col bg-slate-950">

      <div className="border-b border-slate-800 p-6">

        <h1 className="text-3xl font-bold text-white">
          OmniRAG AI
        </h1>

        <p className="mt-2 text-slate-400">
          Ask questions about your uploaded PDF
        </p>

      </div>

      <div className="flex-1 overflow-y-auto p-8">

        <div className="mx-auto max-w-4xl space-y-6">

          {messages.map((message, index) => (

            <div
              key={index}
              className={`flex ${
                message.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              <div
                className={`max-w-3xl rounded-2xl px-5 py-4 ${
                  message.role === "user"
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-900 text-slate-300"
                }`}
              >
                <ReactMarkdown>
                {message.content}
                </ReactMarkdown>
              </div>

            </div>

          ))}

          {loading && (
            <div className="rounded-xl bg-slate-900 p-5 text-slate-300">
              🤖 OmniRAG AI is thinking...
            </div>
          )}

          <div ref={bottomRef} />

        </div>

      </div>

      <div className="border-t border-slate-800 bg-slate-900 p-5">

        <div className="mx-auto flex max-w-4xl gap-3">

          <input
            value={question}
            onChange={(e) =>
              setQuestion(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                askQuestion();
              }
            }}
            placeholder="Ask anything about this document..."
            className="flex-1 rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none"
          />

          <button
            onClick={askQuestion}
            disabled={loading}
            className="rounded-xl bg-indigo-600 px-6 text-white hover:bg-indigo-700"
          >
            <Send />
          </button>

        </div>

      </div>

    </main>
  );
}