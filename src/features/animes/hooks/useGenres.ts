import { useQuery } from "@tanstack/react-query";

import { useApi } from "@/hooks/useApi";

export default function useGeneres() {
  const { genreApi } = useApi();

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
