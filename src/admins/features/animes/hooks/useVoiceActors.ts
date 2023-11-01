import { useQuery } from "@tanstack/react-query";

import useAdminApi from "@/admins/hooks/useAdminApi";

export default function useVoiceActors() {
  const { voiceActorApi } = useAdminApi();

  return useQuery({
    queryKey: ["voice-actors"],
    queryFn: () => {
      try {
        return voiceActorApi.getList();
      } catch (e) {
        return [];
      }
    },
  });
}
