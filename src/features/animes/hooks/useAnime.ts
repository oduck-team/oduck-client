import { useQuery } from "@tanstack/react-query";

import useAuth from "@/features/auth/hooks/useAuth";
import { useApi } from "@/hooks/useApi";

export default function useAnime(animeId: number) {
  const { animeApi } = useApi();
  const { user } = useAuth();

  const { data } = useQuery({
    queryKey: ["averageRating", animeId, user?.memberId],
    queryFn: () => animeApi.getAverageRating(animeId),
  });

  const { data: anime, isLoading } = useQuery({
    queryKey: ["anime", animeId, user?.memberId],
    queryFn: () => animeApi.getById(animeId),
  });

  const starRatingAvg = data
    ? Math.floor((data.starRatingAvg / 2) * 10) / 10
    : 0;

  return { starRatingAvg, anime, isLoading };
}
