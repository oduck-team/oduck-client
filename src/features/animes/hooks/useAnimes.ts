import { useInfiniteQuery } from "@tanstack/react-query";

import { useApi } from "@/hooks/useApi";

import { GetAnimesQuery } from "../api/AnimeApi";

export default function useAnimes(
  queryParams: GetAnimesQuery = { size: 10, sort: "latest" },
) {
  const { animeApi } = useApi();

  return useInfiniteQuery({
    queryKey: ["animes", queryParams],
    queryFn: ({ pageParam }) =>
      animeApi.getList({ size: 2, ...queryParams, cursor: pageParam }),
    getNextPageParam: (lastPage) => lastPage.cursor || undefined,
    select: (data) => ({
      pages: data.pages.flatMap((page) => page.items),
      pageParams: data.pageParams,
    }),
  });
}
