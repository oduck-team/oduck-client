import styled from "@emotion/styled";
import { Menu, Layout, Space, Badge } from "antd";
import type { MenuProps } from "antd";
import {
  IconoirProvider,
  HomeSimpleDoor,
  BubbleStar,
  User,
  HeadsetHelp,
  Tv,
} from "iconoir-react";
import { useState } from "react";

import Profile from "./Profile";
import SidebarToggle from "./SidebarToggle";

const { Sider } = Layout;
const sidebarWith = 256; // 사이드바 넓이
const collapsedWidth = 80; // 사이드바 줄었을때 넓이

type CreateItemProps = {
  key: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  children?: CreateItemProps[];
};

function createItem(
  key: string,
  label: React.ReactNode,
  icon?: React.ReactNode,
  style?: React.CSSProperties,
  children?: CreateItemProps[],
) {
  return {
    key,
    label,
    icon,
    style,
    children,
  };
}

const items: MenuProps["items"] = [
  createItem(
    "1",
    "홈",
    <span>
      <HomeSimpleDoor width={"1rem"} height={"1rem"} />
    </span>,
    { fontSize: "1rem" },
  ),
  {
    type: "divider",
  },
  createItem("2", "애니메이션", <Tv />, { fontSize: "1rem" }, [
    createItem("anime-1", "목록", null, { fontSize: "0.875rem" }),
    createItem("anime-2", "장르", null, { fontSize: "0.875rem" }),
    createItem("anime-3", "제작", null, { fontSize: "0.875rem" }),
    createItem("anime-4", "작가", null, { fontSize: "0.875rem" }),
  ]),
  createItem("3", "리뷰", <BubbleStar />, { fontSize: "1rem" }, [
    createItem("review-1", "목록", null, { fontSize: "0.875rem" }),
  ]),
  createItem("4", "회원", <User />, { fontSize: "1rem" }, [
    createItem("user-1", "목록", null, { fontSize: "0.875rem" }),
  ]),
  createItem("5", "고객센터", <HeadsetHelp />, { fontSize: "1rem" }, [
    createItem(
      "helpdesk-1",
      <Space>
        문의 <Badge count={999} />
      </Space>,
      null,
      { fontSize: "0.875rem" },
    ),
    createItem(
      "helpdesk-2",
      <Space>
        신고 <Badge count={999} />
      </Space>,
      null,
      { fontSize: "0.875rem" },
    ),
  ]),
];

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
    paddingLeft: isCollapsed ? ".5rem" : "",
  }),
);

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false); // 사이드바 접힘 여부

  const hanleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

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
      <Header isCollapsed={isCollapsed}>
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
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
          style={{ marginTop: "1.25rem" }}
        />
        <SidebarToggle
          width={sidebarWith}
          collapsedWidth={collapsedWidth}
          isCollapsed={isCollapsed}
          onClick={hanleCollapsed}
        />
      </IconoirProvider>
    </Sider>
  );
}
