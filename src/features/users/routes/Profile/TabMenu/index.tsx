import Loader from "@/components/Loader";
import useTabMenu, {
  BOOKMARK_MENU,
  MENU,
  REVIEW_MENU,
} from "@/features/users/hooks/useTabMenu";

import BookmarkList from "./BookmarkList";
import ReviewList from "./ReviewList";
import SortBar from "./SortBar";
import { ContentContainer, Tab, TabButton, Target } from "./style";

const TAB_BUTTONS = [
  { text: REVIEW_MENU as MENU },
  { text: BOOKMARK_MENU as MENU },
];

interface TabMenuProps {
  isMine: boolean;
  memberId: number;
}

export default function TabMenu({ isMine, memberId }: TabMenuProps) {
  const {
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
  } = useTabMenu(memberId);

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
          selectedMenu={selectedMenu}
          selected={selectedSort}
          BUTTONS={SHEET_BUTTONS}
          onClick={handleSortClick}
        />
        {selectedMenu === "한줄리뷰" && (
          <ReviewList
            isMine={isMine}
            list={reviews?.pages ?? []}
            isLoading={isLoadingReview}
          />
        )}
        {selectedMenu === "입덕애니" && (
          <BookmarkList
            isMine={isMine}
            list={bookmarks?.pages ?? []}
            isLoading={isLoadingBookmark}
          />
        )}

        <Target ref={targetRef} />

        {(isFetchingBookmarkNext || isFetchingReviewNext) && (
          <Loader display="oduck" />
        )}
      </ContentContainer>
    </>
  );
}
