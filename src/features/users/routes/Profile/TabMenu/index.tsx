import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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
        <SortBar menu={selectedMenu} />
        {selectedMenu === "한줄리뷰" && <ReviewList isMine={isMine} />}
        {selectedMenu === "입덕애니" && <BookmarkList />}
      </ContentContainer>
    </>
  );
}
