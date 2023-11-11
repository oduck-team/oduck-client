import { notifications } from "@mantine/notifications";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

import useAdminApi from "@/admins/hooks/useAdminApi";
// TODO: 예외 처리
export default function useVoiceActorManager() {
  const { voiceActorApi } = useAdminApi();
  const queryClient = useQueryClient();

  const {
    data: voiceActors,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["voiceActors"],
    queryFn: () => {
      try {
        return voiceActorApi.getList();
      } catch (e) {
        return [];
      }
    },
  });

  const createVoiceActor = useMutation({
    mutationFn: (name: string) => voiceActorApi.create({ name }),
    onSuccess: () => {
      notifications.show({
        message: "성우가 등록되었어요",
        color: "green",
      });
      queryClient.invalidateQueries({
        queryKey: ["voiceActors"],
      });
    },
  });

  const updateVoiceActor = useMutation({
    mutationFn: ({ id, name }: { id: number; name: string }) =>
      voiceActorApi.update(id, { name }),
    onSuccess: () => {
      notifications.show({
        message: "성우가 수정되었어요",
        color: "green",
      });
      queryClient.invalidateQueries({
        queryKey: ["voiceActors"],
      });
    },
  });

  const deleteVoiceActor = useMutation({
    mutationFn: (id: number) => voiceActorApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["voiceActors"],
      });
    },
    onError: (e) => {
      if (e instanceof AxiosError && e.response?.status === 404) {
        notifications.show({
          message: "존재하지 않는 성우에요",
          color: "red",
        });
        queryClient.invalidateQueries({
          queryKey: ["voiceActors"],
        });
      }
    },
  });

  return {
    voiceActors,
    isLoading,
    isError,
    createVoiceActor,
    updateVoiceActor,
    deleteVoiceActor,
  };
}
