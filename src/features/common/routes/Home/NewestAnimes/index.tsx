import { useQuery } from "@tanstack/react-query";

import AnimeSlide from "@/features/animes/components/AnimeSlide";
import { useApi } from "@/hooks/useApi";

export default function NewestAnimes() {
  const { animeApi } = useApi();
  const { data: newestAnimes } = useQuery({
    queryKey: ["newestAnimes"],
    queryFn: () => animeApi.getNewestList(),
  });

  return (
    <>
      {newestAnimes && (
        <AnimeSlide title="2023년 3분기 신작" animes={newestAnimes} />
      )}
    </>
  );
}
