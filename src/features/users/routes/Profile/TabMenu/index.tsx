import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import useAuth from "@/features/auth/hooks/useAuth";
import useSortBar from "@/features/users/hooks/useSortBar";
import { useApi } from "@/hooks/useApi";

import BookmarkList from "./BookmarkList";
import ReviewList from "./ReviewList";
import SortBar from "./SortBar";
import { ContentContainer, Tab, TabButton } from "./style";

const REVIEW_MENU = "한줄리뷰";
const BOOKMARK_MENU = "입덕애니";
const TAB_BUTTONS = [
  { text: REVIEW_MENU as MENU },
  { text: BOOKMARK_MENU as MENU },
];

export type MENU = typeof REVIEW_MENU | typeof BOOKMARK_MENU;

interface TabMenuProps {
  isMine: boolean;
}

export default function TabMenu({ isMine }: TabMenuProps) {
  const location = useLocation();
  const [selectedMenu, setSelectedMenu] = useState<MENU>(REVIEW_MENU);
  const handleTabMenuClick = (text: MENU) => setSelectedMenu(text);
  const { selected, SHEET_BUTTONS, handleSortClick } = useSortBar(selectedMenu);
  const {
    user: { memberId },
  } = useAuth();
  const { profile } = useApi();
  const {
    data: bookmarks,
    isLoading: isLoadingBookmark,
    fetchNextPage: fetchNextPageBookmark,
    hasNextPage: hasNextPageBookmark,
  } = useInfiniteQuery(
    ["bookmark", memberId, selected.id, selected.isDESC],
    ({ pageParam }) => profile.getBookmark(memberId, pageParam, selected),
    {
      getNextPageParam: (lastPage) => lastPage.cursor || undefined,
      select: (data) => ({
        pages: data.pages.flatMap((page) => page.items),
        pageParams: data.pageParams,
      }),
    },
  );

  const {
    data: reviews,
    isLoading: isLoadingReview,
    fetchNextPage: fetchNextPageReview,
    hasNextPage: hasNextPageReview,
  } = useInfiniteQuery(
    ["review", memberId, selected.id, selected.isDESC],
    ({ pageParam }) => profile.getReview(memberId, pageParam, selected),
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

  useEffect(() => {
    if (!location.state) return;
    setSelectedMenu(BOOKMARK_MENU);
  }, [location.state]);

  return (
    <>
      <Tab>
        {TAB_BUTTONS.map((menu) => (
          <TabButton
            key={menu.text}
            type="button"
            selected={selectedMenu}
            text={menu.text}
            onClick={() => handleTabMenuClick(menu.text)}
          >
            {menu.text}
          </TabButton>
        ))}
      </Tab>
      <ContentContainer>
        <SortBar
          count={listCount ?? 0}
          selected={selected}
          BUTTONS={SHEET_BUTTONS}
          onClick={handleSortClick}
        />
        {selectedMenu === "한줄리뷰" && (
          <ReviewList
            isMine={isMine}
            list={reviews?.pages ?? []}
            fetchNextPage={fetchNextPageReview}
            hasNextPage={hasNextPageReview}
          />
        )}
        {selectedMenu === "입덕애니" && (
          <BookmarkList
            list={bookmarks?.pages ?? []}
            fetchNextPage={fetchNextPageBookmark}
            hasNextPage={hasNextPageBookmark}
          />
        )}

        {(isLoadingBookmark || isLoadingReview) && <span>로딩중</span>}
      </ContentContainer>
    </>
  );
}
