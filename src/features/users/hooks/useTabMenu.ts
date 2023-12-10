import { useInfiniteQuery } from "@tanstack/react-query";
import { useRef, useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

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
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [selectedMenu, setSelectedMenu] = useState<MENU>(REVIEW_MENU);
  const handleTabMenuClick = (text: MENU) => {
    setSelectedMenu(text);
    // queryString 설정
    history.replaceState(
      null,
      "",
      `?tab=${text === "한줄리뷰" ? REVIEW : BOOKMARK}`,
    );
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
    isFetchingNextPage: isFetchingBookmarkNext,
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
    isFetchingNextPage: isFetchingReviewNext,
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

  /**
   * queryString tab === 'bookmark'인 경우, 입덕애니 Menu 선택
   * sidebar의 입덕애니 메뉴 클릭 또는 새로고침 시 실행
   * */
  useEffect(() => {
    searchParams.get("tab") === BOOKMARK
      ? setSelectedMenu(BOOKMARK_MENU)
      : setSelectedMenu(REVIEW_MENU);
  }, [location, searchParams]);

  return {
    targetRef,
    selectedMenu,
    selected: selectedSort,
    bookmarks,
    isLoadingBookmark,
    isFetchingBookmarkNext,
    reviews,
    isLoadingReview,
    isFetchingReviewNext,
    handleTabMenuClick,
    SHEET_BUTTONS,
    handleSortClick,
  };
}
