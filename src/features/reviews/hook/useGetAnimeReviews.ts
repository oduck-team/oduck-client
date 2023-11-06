import { useInfiniteQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";

import { useApi } from "@/hooks/useApi";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

type SortOptionId = "likeCount" | "score" | "created_at";
type Order = "ASC" | "DESC";

export interface ReviewSortOption {
  sort: SortOptionId;
  label: string;
  order: Order;
}

export default function useGetAnimeReviews(animeId: number) {
  const targetRef = useRef(null);
  const { reviewApi } = useApi();

  const SORT_OPTION: ReviewSortOption[] = [
    {
      label: "좋아요순",
      sort: "likeCount",
      order: "DESC",
    },
    {
      label: "최신순",
      sort: "created_at",
      order: "DESC",
    },
    {
      label: "평점 높은 순",
      sort: "score",
      order: "DESC",
    },
    {
      label: "평점 낮은 순",
      sort: "score",
      order: "ASC",
    },
  ];

  const [selectedsortOption, setSelectedSortOption] =
    useState<ReviewSortOption>(SORT_OPTION[0]);

  const handleChipClick = (i: number) => {
    setSelectedSortOption(SORT_OPTION[i]);
  };

  const {
    data: reviews,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ["review", animeId, selectedsortOption.sort, selectedsortOption.order],
    ({ pageParam }) =>
      reviewApi.getAnimeReviews(animeId, pageParam, selectedsortOption),
    {
      getNextPageParam: (lastPage) => lastPage.cursor || undefined,
      select: (data) => ({
        pages: data.pages.flatMap((page) => page.items),
        pageParams: data.pageParams,
      }),
    },
  );

  useIntersectionObserver({
    target: targetRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  });

  return {
    reviews,
    targetRef,
    SORT_OPTION,
    selectedsortOption,
    handleChipClick,
  };
}
