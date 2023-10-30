import { useQuery } from "@tanstack/react-query";

import useAdminApi from "@/admins/hooks/useAdminApi";

export default function useStudios() {
  const { studioApi } = useAdminApi();

  return useQuery({
    queryKey: ["studios"],
    queryFn: () => {
      try {
        return studioApi.getList();
      } catch (e) {
        return [];
      }
    },
  });
}
