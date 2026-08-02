import api from "../lib/axios";

export async function askQuestion(data: {
  session_id: string;
  question: string;
  top_k?: number;
}) {
  const response = await api.post(
    "/chat",
    data
  );

  return response.data;
}