import { HomeSimple, Menu, Search, Tv } from "iconoir-react";
import { Outlet, useLocation } from "react-router-dom";

import BottomNavigation from "../BottomNavigation";

export default function Layout() {
  const location = useLocation();

  const currentPath = location.pathname;

  return (
    <>
      <Outlet />
      <BottomNavigation
        title="모바일 네비게이션"
        activeKey={currentPath}
        // onClickItem={handleClickNav}
        items={[
          {
            key: "/",
            to: "/",
            icon: <HomeSimple />,
            label: "홈",
          },
          {
            key: "/animations",
            to: "/animations",
            icon: <Tv />,
            label: "애니",
          },
          {
            key: "/search",
            to: "/search",
            icon: <Search />,
            label: "검색",
          },
          {
            key: "/menu",
            to: "/menu",
            icon: <Menu />,
            label: "메뉴",
          },
        ]}
      />
    </>
  );
}
