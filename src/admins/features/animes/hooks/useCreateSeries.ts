import { useMutation, useQueryClient } from "@tanstack/react-query";

import useAdminApi from "@/admins/hooks/useAdminApi";

export default function useCreateSeries() {
  const { seriesApi } = useAdminApi();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (title: string) => seriesApi.create({ title }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["series"],
      });
    },
  });
}
