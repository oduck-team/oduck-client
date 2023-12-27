import { useQuery } from "@tanstack/react-query";

import useAuth from "@/features/auth/hooks/useAuth";
import { useApi } from "@/hooks/useApi";
import { calcStarRatingAvg } from "@/utils/common";

import { AttractionPointStatics } from "../api/AnimeApi";

export default function useAnime(animeId: number) {
  const { animeApi } = useApi();
  const { user } = useAuth();

  const { data } = useQuery({
    queryKey: ["averageRating", animeId, user?.memberId],
    queryFn: () => animeApi.getAverageRating(animeId),
  });

  const { data: statics } = useQuery({
    queryKey: ["attraction", animeId, "statics"],
    queryFn: () => animeApi.getAttractionPoint(animeId),
  });

  const { data: anime, isLoading } = useQuery({
    queryKey: ["anime", animeId, user?.memberId],
    queryFn: () => animeApi.getById(animeId),
  });

  const starRatingAvg = calcStarRatingAvg(data?.starRatingAvg);

  // 입덕포인트 통계 값 소수점 한 자리 밑으로 자른 후 반환
  const attractionStatics =
    statics &&
    (Object.fromEntries(
      Object.entries(statics).map(([key, value]) => [
        key,
        Math.floor(value * 10) / 10,
      ]),
    ) as AttractionPointStatics);

  return { starRatingAvg, attractionStatics, anime, isLoading };
}
