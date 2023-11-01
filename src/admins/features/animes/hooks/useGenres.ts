import { useQuery } from "@tanstack/react-query";

import useAdminApi from "@/admins/hooks/useAdminApi";

export default function useGenres() {
  const { genreApi } = useAdminApi();

  return useQuery({
    queryKey: ["genres"],
    queryFn: () => {
      try {
        return genreApi.getList();
      } catch (e) {
        return [];
      }
    },
  });
}
