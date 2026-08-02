import api from "../lib/axios";

export const getDocuments = async () => {
  const response = await api.get("/documents");
  return response.data;
};