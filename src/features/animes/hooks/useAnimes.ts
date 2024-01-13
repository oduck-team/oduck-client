import { useInfiniteQuery } from "@tanstack/react-query";

import { useApi } from "@/hooks/useApi";

import { GetAnimesQuery } from "../api/AnimeApi";

import { REQUEST_SIZE } from "./useFilterAnimes";

interface UseAnimes {
  /** 자동 fetch 여부 */
  autoFetch?: boolean;

  /** 요청 쿼리 */
  queryParams: GetAnimesQuery;
}

export default function useAnimes({
  autoFetch = true,
  queryParams = { size: REQUEST_SIZE, sort: "LATEST" },
}: UseAnimes) {
  const { animeApi } = useApi();

  return useInfiniteQuery({
    queryKey: ["animes", queryParams],
    queryFn: ({ pageParam }) =>
      animeApi.getList({
        size: REQUEST_SIZE,
        ...queryParams,
        cursor: pageParam,
      }),
    getNextPageParam: (lastPage) => lastPage.cursor || undefined,
    select: (data) => ({
      pages: data.pages.flatMap((page) => page.items),
      pageParams: data.pageParams,
    }),
    enabled: autoFetch,
  });
}
