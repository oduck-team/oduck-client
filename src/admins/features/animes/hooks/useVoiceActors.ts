import { useQuery } from "@tanstack/react-query";

import useAdminApi from "@/admins/hooks/useAdminApi";

export default function useVoiceActors() {
  const { voiceActorApi } = useAdminApi();

  const sortByActorsByName = (voiceAcotrs: VoiceActor[]) => {
    return voiceAcotrs.sort((a, b) => a.name.localeCompare(b.name));
  };

  return useQuery({
    queryKey: ["voice-actors"],
    queryFn: async () => {
      try {
        const response = await voiceActorApi.getList();
        return sortByActorsByName(response);
      } catch (e) {
        return [];
      }
    },
  });
}
