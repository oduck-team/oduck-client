import { notifications } from "@mantine/notifications";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

import useAdminApi from "@/admins/hooks/useAdminApi";

export default function useCreateVoiceActor() {
  const { voiceActorApi } = useAdminApi();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (name: string) => voiceActorApi.create({ name }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["voice-actors"],
      });
    },
    onError: (e) => {
      if (e instanceof AxiosError && e.response?.status) {
        notifications.show({
          message: "이미 존재하는 성우입니다",
          color: "red",
        });
      }
    },
  });
}
