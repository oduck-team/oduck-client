import { useMutation, useQueryClient } from "@tanstack/react-query";

import useAdminApi from "@/admins/hooks/useAdminApi";

export default function useCreateStudio() {
  const { studioApi } = useAdminApi();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (name: string) => studioApi.create({ name }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["studios"],
      });
    },
  });
}
