import { useMutation, useQueryClient } from "@tanstack/react-query";

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
  });
}
