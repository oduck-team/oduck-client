import { useState } from "react";

import BookmarkList from "./BookmarkList";
import ReviewList from "./ReviewList";
import { ContentContainer, Tab, TabButton } from "./style";

const REVIEW_MENU = "한줄리뷰";
const BOOKMARK_MENU = "입덕애니";
const TAB_BUTTONS = [
  { text: REVIEW_MENU as MENU },
  { text: BOOKMARK_MENU as MENU },
];

export type MENU = typeof REVIEW_MENU | typeof BOOKMARK_MENU;

export default function TabMenu() {
  const [selectedMenu, setSelectedMenu] = useState<MENU>(REVIEW_MENU);
  const handleTabMenuClick = (text: MENU) => setSelectedMenu(text);

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
        {selectedMenu === "한줄리뷰" && <ReviewList />}
        {selectedMenu === "입덕애니" && <BookmarkList />}
      </ContentContainer>
    </>
  );
}
