import { HomeSimple, Menu, Search, Tv } from "iconoir-react";
import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import BottomNavigation, { INavigationItem } from "../BottomNavigation";

import Sidebar from "./Sidebar";

// 하단 네비게이션 버튼 아이템
const bottomNavItems: INavigationItem[] = [
  {
    id: "/",
    to: "/",
    icon: <HomeSimple />,
    label: "홈",
  },
  {
    id: "/animations",
    to: "/animations",
    icon: <Tv />,
    label: "애니",
  },
  {
    id: "/search",
    to: "/search",
    icon: <Search />,
    label: "검색",
  },
  {
    id: "/menu",
    to: "/menu",
    icon: <Menu />,
    label: "메뉴",
  },
];

export default function Layout() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const currentPath = location.pathname;

  const handleSidebarVisible = (value: boolean) => {
    setIsSidebarVisible(value);
  };

  const handleClickProfile = (e: React.MouseEvent) => {
    e.preventDefault();
    //TODO: 로그인 유무에 따른 라우팅 처리
  };

  const handleClickNav = (id: string, e: React.MouseEvent) => {
    e.preventDefault();

    switch (id) {
      // 메뉴 sidebar 켜기
      case "/menu": {
        setIsSidebarVisible(true);
        break;
      }
      // 아니라면 화면 이동
      default: {
        const item = bottomNavItems.find((item) => item.id === id);
        if (item) {
          navigate(item.to);
          return;
        }
        console.warn(`navigation id ${id} is not exists`);
        navigate("/"); // 기본 동작
      }
    }
  };

  return (
    <>
      <Outlet />
      <Sidebar
        isVisible={isSidebarVisible}
        // userName={}
        // userImage={}
        onClose={() => handleSidebarVisible(false)}
        onClickProfile={handleClickProfile}
      />
      <BottomNavigation
        title="모바일 네비게이션"
        activeId={currentPath}
        onClickItem={handleClickNav}
        items={bottomNavItems}
      />
    </>
  );
}
