import { Badge, Box, Flex } from "@mantine/core";
import { HomeSimpleDoor, Tv, User, HeadsetHelp } from "iconoir-react";
import { useNavigate } from "react-router-dom";

import Menu, { IMenu } from "./Menu";

export default function Menus() {
  const naviagate = useNavigate();

  const handleClickMenu = (e: React.MouseEvent, to: string) => {
    e.preventDefault();
    naviagate(to);
  };

  return (
    <Box component="ul" pt={"md"}>
      {items.map((item) => (
        <li key={item.id}>
          <Menu menu={item} onClick={handleClickMenu} />
        </li>
      ))}
    </Box>
  );
}

const items: IMenu[] = [
  {
    id: "home",
    label: "홈",
    icon: <HomeSimpleDoor width={"1rem"} height={"1rem"} />,
    to: "/admin",
  },
  {
    id: "animations",
    label: "애니메이션",
    icon: <Tv width={"1rem"} height={"1rem"} />,
    to: "/admin/animations",
    children: [
      {
        id: "animation-list",
        label: "목록",
        to: "/amdin/animations",
      },
      {
        id: "genres",
        label: "장르",
        to: "/amdin/animations/genres",
      },
      {
        id: "studios",
        label: "제작",
        to: "/admin/animations/studios",
      },
    ],
  },
  {
    id: "users",
    label: "회원",
    icon: <User width={"1rem"} height={"1rem"} />,
    to: "/admin/users",
  },
  {
    id: "helpdesk",
    label: "고객센터",
    icon: <HeadsetHelp width={"1rem"} height={"1rem"} />,
    to: "/admin/helpdesk",
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
        to: "/admin/helpdesk/qna",
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
        to: "/admin/helpdesk/report",
      },
    ],
  },
];
