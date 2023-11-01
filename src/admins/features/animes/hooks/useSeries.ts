import { useQuery } from "@tanstack/react-query";

import useAdminApi from "@/admins/hooks/useAdminApi";

export default function useSeries() {
  const { seriesApi } = useAdminApi();

  return useQuery({
    queryKey: ["series"],
    queryFn: () => {
      try {
        return seriesApi.getList();
      } catch (e) {
        return [];
      }
    },
  });
}
