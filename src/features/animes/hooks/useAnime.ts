import { useQuery } from "@tanstack/react-query";

import useAuth from "@/features/auth/hooks/useAuth";
import { useApi } from "@/hooks/useApi";
import { calcStarRatingAvg } from "@/utils/common";

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

  const starRatingAvg = calcStarRatingAvg(data?.starRatingAvg);

  return { starRatingAvg, anime, isLoading };
}
