import { useMutation, useQueryClient } from "@tanstack/react-query";

import useAdminApi from "@/admins/hooks/useAdminApi";

export default function useCreateGenre() {
  const { genreApi } = useAdminApi();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (name: string) => genreApi.create({ name }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["genres"],
      });
    },
  });
}
