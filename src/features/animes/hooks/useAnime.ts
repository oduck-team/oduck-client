import { useQuery } from "@tanstack/react-query";

import useAuth from "@/features/auth/hooks/useAuth";
import { useApi } from "@/hooks/useApi";

export default function useAnime(animeId: number) {
  const { animeApi } = useApi();
  const { user } = useAuth();

  return useQuery({
    queryKey: ["anime", animeId, user?.memberId],
    queryFn: () => animeApi.getById(animeId),
  });
}
