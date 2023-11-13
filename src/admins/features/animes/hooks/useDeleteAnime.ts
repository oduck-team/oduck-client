import { notifications } from "@mantine/notifications";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

import useAdminApi from "@/admins/hooks/useAdminApi";

export default function useDeleteAnime() {
  const { animeApi } = useAdminApi();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => animeApi.delete(id),
    onSuccess: () => {
      notifications.show({ message: "애니가 삭제되었어요", color: "green" });
      queryClient.invalidateQueries({
        queryKey: ["animes"],
      });
    },
    onError: (e) => {
      if (e instanceof AxiosError && e.response?.status === 404) {
        notifications.show({
          message: "존재하지 않는 애니에요",
          color: "red",
        });
        queryClient.invalidateQueries({
          queryKey: ["animes"],
        });
      }
    },
  });
}
