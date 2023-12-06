import { useInfiniteQuery } from "@tanstack/react-query";
import { useRef, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import useSortBar from "@/features/users/hooks/useSortBar";
import { useApi } from "@/hooks/useApi";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const REVIEW = "review";
export const BOOKMARK = "bookmark";

export const REVIEW_MENU = "한줄리뷰";
export const BOOKMARK_MENU = "입덕애니";

export type MENU = typeof REVIEW_MENU | typeof BOOKMARK_MENU;

export default function useTabMenu(memberId: number) {
  const targetRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedMenu, setSelectedMenu] = useState<MENU>(REVIEW_MENU);
  const handleTabMenuClick = (text: MENU) => {
    setSelectedMenu(text);
    text === "한줄리뷰"
      ? searchParams.set("tab", REVIEW)
      : searchParams.set("tab", BOOKMARK);
    setSearchParams(searchParams, { replace: true });
  };
  const {
    selected: selectedSort,
    SHEET_BUTTONS,
    handleSortClick,
  } = useSortBar(selectedMenu);
  const { profile } = useApi();

  // bookmark query
  const {
    data: bookmarks,
    isLoading: isLoadingBookmark,
    fetchNextPage: fetchNextPageBookmark,
    hasNextPage: hasNextPageBookmark,
  } = useInfiniteQuery(
    ["profile", memberId, "bookmark", selectedSort.id, selectedSort.isDESC],
    ({ pageParam }) => profile.getBookmark(memberId, pageParam, selectedSort),
    {
      getNextPageParam: (lastPage) => lastPage.cursor || undefined,
      select: (data) => ({
        pages: data.pages.flatMap((page) => page.items),
        pageParams: data.pageParams,
      }),
      enabled: selectedMenu === "입덕애니",
    },
  );

  // review query
  const {
    data: reviews,
    isLoading: isLoadingReview,
    fetchNextPage: fetchNextPageReview,
    hasNextPage: hasNextPageReview,
  } = useInfiniteQuery(
    ["profile", memberId, "review", selectedSort.id, selectedSort.isDESC],
    ({ pageParam }) => profile.getReview(memberId, pageParam, selectedSort),
    {
      getNextPageParam: (lastPage) => lastPage.cursor || undefined,
      select: (data) => ({
        pages: data.pages.flatMap((page) => page.items),
        pageParams: data.pageParams,
      }),
      enabled: selectedMenu === "한줄리뷰",
    },
  );

  useIntersectionObserver({
    target: targetRef,
    onIntersect:
      selectedMenu === "입덕애니" ? fetchNextPageBookmark : fetchNextPageReview,
    enabled:
      selectedMenu === "입덕애니" ? hasNextPageBookmark : hasNextPageReview,
  });

  /** queryString tab === 'bookmark'인 경우, 입덕애니 Menu 선택 */
  useEffect(() => {
    searchParams.get("tab") === BOOKMARK
      ? setSelectedMenu(BOOKMARK_MENU)
      : setSelectedMenu(REVIEW_MENU);
  }, [searchParams]);

  return {
    targetRef,
    selectedMenu,
    selected: selectedSort,
    bookmarks,
    isLoadingBookmark,
    reviews,
    isLoadingReview,
    handleTabMenuClick,
    SHEET_BUTTONS,
    handleSortClick,
  };
}
