import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import useAuth from "@/features/auth/hooks/useAuth";
import useSortBar from "@/features/users/hooks/useSortBar";
import { useApi } from "@/hooks/useApi";

export const REVIEW_MENU = "한줄리뷰";
export const BOOKMARK_MENU = "입덕애니";

export type MENU = typeof REVIEW_MENU | typeof BOOKMARK_MENU;

export default function useTabMenu() {
  const location = useLocation();
  const [selectedMenu, setSelectedMenu] = useState<MENU>(REVIEW_MENU);
  const handleTabMenuClick = (text: MENU) => setSelectedMenu(text);
  const {
    selected: selectedSort,
    SHEET_BUTTONS,
    handleSortClick,
  } = useSortBar(selectedMenu);
  const {
    user: { memberId },
  } = useAuth();
  const { profile } = useApi();

  // bookmark query
  const {
    data: bookmarks,
    isLoading: isLoadingBookmark,
    fetchNextPage: fetchNextPageBookmark,
    hasNextPage: hasNextPageBookmark,
  } = useInfiniteQuery(
    ["bookmark", memberId, selectedSort.id, selectedSort.isDESC],
    ({ pageParam }) => profile.getBookmark(memberId, pageParam, selectedSort),
    {
      getNextPageParam: (lastPage) => lastPage.cursor || undefined,
      select: (data) => ({
        pages: data.pages.flatMap((page) => page.items),
        pageParams: data.pageParams,
      }),
    },
  );

  // review query
  const {
    data: reviews,
    isLoading: isLoadingReview,
    fetchNextPage: fetchNextPageReview,
    hasNextPage: hasNextPageReview,
  } = useInfiniteQuery(
    ["review", memberId, selectedSort.id, selectedSort.isDESC],
    ({ pageParam }) => profile.getReview(memberId, pageParam, selectedSort),
    {
      getNextPageParam: (lastPage) => lastPage.cursor || undefined,
      select: (data) => ({
        pages: data.pages.flatMap((page) => page.items),
        pageParams: data.pageParams,
      }),
    },
  );

  const listCount =
    selectedMenu === "입덕애니"
      ? bookmarks?.pages.length
      : reviews?.pages.length;

  // SideBar 입덕애니 클릭 시, 입덕애니 Menu 선택
  useEffect(() => {
    if (!location.state) return;
    setSelectedMenu(BOOKMARK_MENU);
  }, [location.state]);

  return {
    selectedMenu,
    selected: selectedSort,
    bookmarks,
    isLoadingBookmark,
    fetchNextPageBookmark,
    hasNextPageBookmark,
    reviews,
    isLoadingReview,
    fetchNextPageReview,
    hasNextPageReview,
    listCount,
    handleTabMenuClick,
    SHEET_BUTTONS,
    handleSortClick,
  };
}
