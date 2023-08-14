import { Menu, Space, Badge } from "antd";
import type { MenuProps } from "antd";
import {
  HomeSimpleDoor,
  Tv,
  BubbleStar,
  User,
  HeadsetHelp,
} from "iconoir-react";

interface CreateItemProps {
  key: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  children?: CreateItemProps[];
}

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

interface MenusProps {
  readonly style?: React.CSSProperties;
}

export default function Menus({ style }: MenusProps) {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={["1"]}
      items={items}
      style={style}
    />
  );
}
