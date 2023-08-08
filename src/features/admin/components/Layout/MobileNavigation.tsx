import styled from "@emotion/styled";
import { Button, Menu, Space, Badge } from "antd";
import type { MenuProps } from "antd";
import {
  Menu as MenuIcon,
  Cancel,
  HomeSimpleDoor,
  Tv,
  BubbleStar,
  User,
  HeadsetHelp,
} from "iconoir-react";

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

// TODO: 미디어쿼리
const Container = styled.div({
  position: "sticky",
  top: 0,
  height: "3.5rem",

  paddingLeft: "1rem",
  paddingRight: "1rem",
  backgroundColor: "#ffffff",
  borderBottom: "1px solid #cccccc",

  "@media (min-width: 640px)": {
    display: "none",
  },
});

const Header = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const Profile = styled.div({
  display: "flex",
  alignItems: "center",
  "& p": {
    marginLeft: ".5rem",
    fontSize: "1.125rem",
    fontWeight: "bold",
  },
});

interface MobileNavigationProps {
  readonly isActive: boolean;
  readonly setIsActive: () => void;
}

export default function MobileNavigation({
  isActive,
  setIsActive,
}: MobileNavigationProps) {
  return (
    <Container>
      <Header>
        <Profile>
          <div>[로고]</div>
          <p>Oduck Admin</p>
        </Profile>
        <Button
          type="text"
          shape="circle"
          icon={isActive ? <Cancel /> : <MenuIcon />}
          onClick={setIsActive}
        ></Button>
      </Header>
      {isActive && (
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
          style={{
            position: "fixed",
            top: "3.5rem",
            bottom: 0,
            left: 0,
            right: 0,
          }}
        />
      )}
    </Container>
  );
}
