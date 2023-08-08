import styled from "@emotion/styled";
import { Layout } from "antd";
import { IconoirProvider } from "iconoir-react";

import Menus from "./Menus";
import Profile from "./Profile";
import SidebarToggle from "./SidebarToggle";

const { Sider } = Layout;
const sidebarWith = 256; // 사이드바 넓이
const collapsedWidth = 80; // 사이드바 줄었을때 넓이

const Header = styled.div<{ isCollapsed: boolean }>(
  {
    display: "flex",
    gap: ".5rem",
    margin: "0.25rem",
    overflow: "hidden",
    transition: "padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)",
    "& h1": {
      display: "none",
    },
  },
  ({ isCollapsed }) => ({
    paddingLeft: isCollapsed ? "" : ".5rem",
  }),
);

interface SidebarProps {
  readonly isCollapsed: boolean;
  readonly setIsCollapsed: () => void;
}

export default function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
  return (
    <Sider
      theme="light"
      width={sidebarWith}
      collapsedWidth={collapsedWidth}
      trigger={null}
      collapsible
      collapsed={isCollapsed}
      css={{
        display: "none",
        // TODO: global 미디어쿼리
        "@media (min-width: 640px)": {
          display: "block",
        },
      }}
    >
      <Header isCollapsed={!isCollapsed}>
        <h1>메뉴</h1>
        {/* TODO: 로고 추가되면 <div/> 로고로 바꾸기 */}
        <div
          style={{
            minWidth: "48px",
            minHeight: "48px",
            backgroundColor: "blue",
            color: "white",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          로고
        </div>
        <Profile isVisible={!isCollapsed} />
      </Header>
      {/* w, h 1rem으로 해야 사이드바 접었을 때 아이콘 중앙 정렬 됨 */}
      <IconoirProvider
        iconProps={{
          strokeWidth: 2,
          width: "1em",
          height: "1em",
        }}
      >
        <Menus style={{ marginTop: "1.25rem" }} />
        <SidebarToggle
          width={sidebarWith}
          collapsedWidth={collapsedWidth}
          isCollapsed={isCollapsed}
          onClick={setIsCollapsed}
        />
      </IconoirProvider>
    </Sider>
  );
}
