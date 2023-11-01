import { useQuery } from "@tanstack/react-query";

import useAdminApi from "@/admins/hooks/useAdminApi";

export default function useOriginalAuthors() {
  const { originalAuthorApi } = useAdminApi();

  return useQuery({
    queryKey: ["original-authors"],
    queryFn: () => {
      try {
        return originalAuthorApi.getList();
      } catch (e) {
        return [];
      }
    },
  });
}
