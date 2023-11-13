import { useQuery } from "@tanstack/react-query";

import AnimeSlide from "@/features/animes/components/AnimeSlide";
import AnimeSlideLoading from "@/features/animes/components/AnimeSlide/AnimeSlideLoading";
import { useApi } from "@/hooks/useApi";

export default function NewestAnimes() {
  const { animeApi } = useApi();
  const { data: newestAnimes, isLoading } = useQuery({
    queryKey: ["newestAnimes"],
    queryFn: () => animeApi.getNewestList(),
  });

  if (isLoading) return <AnimeSlideLoading />;
  return (
    <>
      {newestAnimes && (
        <AnimeSlide title="2023년 3분기 신작" animes={newestAnimes} />
      )}
    </>
  );
}
