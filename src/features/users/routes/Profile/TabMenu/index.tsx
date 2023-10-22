import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import useAuth from "@/features/auth/hooks/useAuth";
import useSortBar from "@/features/users/hooks/useSortBar";
import { useApi } from "@/hooks/useApi";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

import BookmarkList from "./BookmarkList";
import ReviewList from "./ReviewList";
import SortBar from "./SortBar";
import { ContentContainer, Tab, TabButton, Target } from "./style";

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
  const targetRef = useRef(null);
  const [selectedMenu, setSelectedMenu] = useState<MENU>(REVIEW_MENU);
  const handleTabMenuClick = (text: MENU) => setSelectedMenu(text);
  const { selected, SHEET_BUTTONS, handleSortClick } = useSortBar(selectedMenu);
  const {
    user: { memberId },
  } = useAuth();
  const { profile } = useApi();
  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(
    [selectedMenu, memberId, selected.id, selected.isDESC],
    ({ pageParam }) =>
      profile.getBookmark(memberId, pageParam, selectedMenu, selected),
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
          count={data?.pages.length ?? 0}
          selected={selected}
          BUTTONS={SHEET_BUTTONS}
          onClick={handleSortClick}
        />
        {selectedMenu === "한줄리뷰" && <ReviewList isMine={isMine} />}
        {selectedMenu === "입덕애니" && (
          <BookmarkList list={data?.pages ?? []} />
        )}

        <Target ref={targetRef} />

        {isLoading && <span>로딩중</span>}
      </ContentContainer>
    </>
  );
}
