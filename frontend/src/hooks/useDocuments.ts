import { useQuery } from "@tanstack/react-query";

import { getDocuments } from "../api/documents";
import type { Document } from "../types/document";

export function useDocuments() {
  return useQuery<Document[]>({
    queryKey: ["documents"],
    queryFn: getDocuments,
  });
}