import { Badge, Flex } from "@mantine/core";
import {
  Headset,
  HouseSimple,
  TelevisionSimple,
  User,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ADMIN_ROUTE from "@/admins/constants/path";

import AdminNavItem, { NavItem } from "./AdminNavItem";
import AdminProfile from "./AdminProfile";

const items: NavItem[] = [
  {
    id: "home",
    label: "홈",
    icon: <HouseSimple size={16} />,
    to: ADMIN_ROUTE.HOME,
  },
  {
    id: "animes",
    label: "애니메이션",
    icon: <TelevisionSimple size={16} />,
    to: "/animes",
    children: [
      {
        id: "animation-list",
        label: "애니 목록",
        to: ADMIN_ROUTE.ANIME_LIST,
      },
      {
        id: "genres",
        label: "애니 장르",
        to: "/animes/genres",
      },
      {
        id: "studios",
        label: "애니 제작",
        to: "/animes/studios",
      },
    ],
  },
  {
    id: "users",
    label: "회원",
    icon: <User size={16} />,
    to: ADMIN_ROUTE.USER_LIST,
  },
  {
    id: "helpdesk",
    label: "고객센터",
    icon: <Headset size={16} />,
    to: "/helpdesk",
    children: [
      {
        id: "qna",
        label: (
          <Flex justify={"space-between"}>
            문의
            <Badge variant="gradient" gradient={{ from: "orange", to: "red" }}>
              999
            </Badge>
          </Flex>
        ),
        to: ADMIN_ROUTE.INQUIRY_LIST,
      },
      {
        id: "report",
        label: (
          <Flex justify={"space-between"}>
            신고
            <Badge variant="gradient" gradient={{ from: "orange", to: "red" }}>
              999
            </Badge>
          </Flex>
        ),
        to: ADMIN_ROUTE.REPORT_LIST,
      },
    ],
  },
];

interface AdminNavListProps {
  userName: string;
  userImage?: string;
}

export default function AdminNavList({
  userName,
  userImage,
}: AdminNavListProps) {
  const { pathname } = useLocation();
  const [active, setActive] = useState(pathname);
  const navigate = useNavigate();

  const handleClickNav = (e: React.MouseEvent, to: string) => {
    e.preventDefault();
    navigate(to);
  };

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  return (
    <ul>
      <li style={{ marginBottom: ".5rem" }}>
        <AdminProfile name={userName} image={userImage} />
      </li>
      {items.map((item) => (
        <li key={item.id}>
          <AdminNavItem
            item={item}
            isActive={item.to === active || undefined}
            onClick={handleClickNav}
          />
        </li>
      ))}
    </ul>
  );
}
