import { useMutation, useQueryClient } from "@tanstack/react-query";

import useAdminApi from "@/admins/hooks/useAdminApi";

export default function useCreateOriginalAuthor() {
  const { originalAuthorApi } = useAdminApi();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (name: string) => originalAuthorApi.create({ name }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["original-authors"],
      });
    },
  });
}
