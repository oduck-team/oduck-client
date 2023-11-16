import { useQuery } from "@tanstack/react-query";

import AnimeSlide from "@/features/animes/components/AnimeSlide";
import AnimeSlideLoading from "@/features/animes/components/AnimeSlide/AnimeSlideLoading";
import { useApi } from "@/hooks/useApi";

interface RecommendAnimesProps {
  title: string;
}

export default function RecommendAnimes({ title }: RecommendAnimesProps) {
  const { animeApi } = useApi();
  const { data, isLoading } = useQuery({
    queryKey: ["recommend", title],
    queryFn: () => animeApi.getRecommendList(),
  });

  if (isLoading) return <AnimeSlideLoading />;
  return <>{data && <AnimeSlide title={title} animes={data} />}</>;
}
