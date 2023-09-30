import { HomeSimple, Menu, Search, Tv } from "iconoir-react";
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
      icon: currentPath === "/" ? <HomeFill /> : <HomeSimple />,
      label: "홈",
    },
    {
      id: "/animations",
      to: "/animations",
      icon: currentPath === "/animations" ? <TvFill /> : <Tv />,
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
  }, [location]);

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

function HomeFill() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 21H7C5.93913 21 4.92172 20.5786 4.17157 19.8284C3.42143 19.0783 3 18.0609 3 17V10.708C2.99999 10.0202 3.17732 9.34405 3.51487 8.74479C3.85242 8.14554 4.33879 7.64345 4.927 7.287L9.927 4.257C10.5521 3.8782 11.2691 3.67792 12 3.67792C12.7309 3.67792 13.4479 3.8782 14.073 4.257L19.073 7.287C19.6611 7.64336 20.1473 8.14529 20.4849 8.74436C20.8224 9.34342 20.9998 10.0194 21 10.707V17C21 18.0609 20.5786 19.0783 19.8284 19.8284C19.0783 20.5786 18.0609 21 17 21H15M9 21V17C9 16.2044 9.31607 15.4413 9.87868 14.8787C10.4413 14.3161 11.2044 14 12 14C12.7956 14 13.5587 14.3161 14.1213 14.8787C14.6839 15.4413 15 16.2044 15 17V21M9 21H15H9Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TvFill() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 9V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H20C20.5304 22 21.0391 21.7893 21.4142 21.4142C21.7893 21.0391 22 20.5304 22 20V9C22 8.46957 21.7893 7.96086 21.4142 7.58579C21.0391 7.21071 20.5304 7 20 7H4C3.46957 7 2.96086 7.21071 2.58579 7.58579C2.21071 7.96086 2 8.46957 2 9ZM10.477 11.8398C10.5167 11.8402 10.5556 11.851 10.5898 11.8713L14.9859 14.4764C15.0195 14.4963 15.0473 14.5247 15.0666 14.5586C15.0859 14.5925 15.0961 14.6309 15.0961 14.6699C15.0961 14.709 15.0859 14.7473 15.0666 14.7813C15.0473 14.8152 15.0195 14.8435 14.9859 14.8634L10.5898 17.4685C10.5556 17.4888 10.5167 17.4997 10.477 17.5C10.4373 17.5003 10.3982 17.4902 10.3636 17.4705C10.3291 17.4509 10.3004 17.4224 10.2805 17.3881C10.2605 17.3538 10.25 17.3148 10.25 17.275V12.0648C10.25 12.0251 10.2605 11.9861 10.2805 11.9517C10.3004 11.9174 10.3291 11.889 10.3636 11.8693C10.3982 11.8497 10.4373 11.8395 10.477 11.8398Z"
        fill="currentColor"
        stroke="currentColor"
      />
      <path
        d="M8.5 2.5L12 6L15.5 2.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
