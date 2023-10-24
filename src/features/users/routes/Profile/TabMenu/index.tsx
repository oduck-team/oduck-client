import Loader from "@/components/Loader";
import useTabMenu, {
  BOOKMARK_MENU,
  MENU,
  REVIEW_MENU,
} from "@/features/users/hooks/useTabMenu";

import BookmarkList from "./BookmarkList";
import ReviewList from "./ReviewList";
import SortBar from "./SortBar";
import { ContentContainer, Tab, TabButton } from "./style";

const TAB_BUTTONS = [
  { text: REVIEW_MENU as MENU },
  { text: BOOKMARK_MENU as MENU },
];

interface TabMenuProps {
  isMine: boolean;
}

export default function TabMenu({ isMine }: TabMenuProps) {
  const {
    selectedMenu,
    selected,
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
  } = useTabMenu();

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

        {(isLoadingBookmark || isLoadingReview) && <Loader display="oduck" />}
      </ContentContainer>
    </>
  );
}
