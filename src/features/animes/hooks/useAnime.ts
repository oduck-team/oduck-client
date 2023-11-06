import { useQuery } from "@tanstack/react-query";

import { useApi } from "@/hooks/useApi";

export default function useAnime(animeId: number) {
  const { animeApi } = useApi();
  return useQuery({
    queryKey: ["anime", animeId],
    queryFn: () => animeApi.getById(animeId),
  });
}
