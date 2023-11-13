import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import useAdminApi from "@/admins/hooks/useAdminApi";

import { GetAnimePagetQuery } from "../api/AdminAnimeApi";

export default function useAnimes() {
  const [searchQuery, setSearchQuery] = useState<GetAnimePagetQuery>({
    query: "",
    page: 1,
    size: 10,
    direction: "DESC",
    queryType: "TITLE",
    statuses: [],
  });
  const { animeApi } = useAdminApi();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["animes", searchQuery],
    queryFn: () => animeApi.getPageList(searchQuery),
    keepPreviousData: true,
  });

  const setCurrentPage = (page: number) => {
    setSearchQuery((prev) => ({
      ...prev,
      page,
    }));
  };

  /** 한 페이지당 보여질 개수 */
  const setDisplaySize = (size: number) => {
    setSearchQuery((prev) => ({
      ...prev,
      page: 1,
      size,
    }));
  };

  /** 다음 페이지 미리 요청 */
  useEffect(() => {
    if (!data) return;

    const { page: currentPage } = searchQuery;

    if (currentPage < data.totalPages) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery({
        queryKey: ["animes", { ...searchQuery, page: nextPage }],
        queryFn: () => animeApi.getPageList({ ...searchQuery, page: nextPage }),
      });
    }
  }, [animeApi, data, queryClient, searchQuery]);

  return { data, isLoading, ...searchQuery, setCurrentPage, setDisplaySize };
}
