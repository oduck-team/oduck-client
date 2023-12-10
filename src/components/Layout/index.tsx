import {
  House,
  List,
  MagnifyingGlass,
  TelevisionSimple,
  UserCircle,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import BottomNavigation, { INavigationItem } from "../BottomNavigation";

import Sidebar from "./Sidebar";
import { LayoutContainer } from "./style";

export default function Layout() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const currentPath = location.pathname;

  // 하단 네비게이션 버튼 아이템
  const bottomNavItems: INavigationItem[] = [
    {
      id: "/",
      to: "/",
      icon: currentPath === "/" ? <House weight="fill" /> : <House />,
      label: "홈",
    },
    {
      id: "/animes",
      to: "/animes",
      icon:
        currentPath === "/animes" ? (
          <TelevisionSimple weight="fill" />
        ) : (
          <TelevisionSimple />
        ),
      label: "애니",
    },
    {
      id: "/search",
      to: "/search",
      icon:
        currentPath === "/search" ? (
          <MagnifyingGlass weight="fill" />
        ) : (
          <MagnifyingGlass />
        ),
      label: "검색",
    },
    {
      id: "/profile",
      to: "/profile",
      icon:
        currentPath === "/profile" ? (
          <UserCircle weight="fill" />
        ) : (
          <UserCircle />
        ),
      label: "프로필",
    },
    {
      id: "/menu",
      to: "/menu",
      icon: <List />,
      label: "메뉴",
    },
  ];

  const handleSidebarVisible = (value: boolean) => {
    setIsSidebarVisible(value);
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <LayoutContainer>
      <Outlet />
      <Sidebar
        isVisible={isSidebarVisible}
        onClickItem={() => handleSidebarVisible(false)}
        onClose={() => handleSidebarVisible(false)}
      />
      <BottomNavigation
        title="모바일 네비게이션"
        activeId={currentPath}
        onClickItem={handleClickNav}
        items={bottomNavItems}
      />
    </LayoutContainer>
  );
}
