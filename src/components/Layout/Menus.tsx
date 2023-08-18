import { HeadsetHelp, Megaphone, PeopleTag, Settings, Tv } from "iconoir-react";

import Menu, { IMenu } from "./Menu";
import { Container, Divider, HelpMenus, UserMenus } from "./Menus.style";

const userMenuItems: IMenu[] = [
  {
    id: "profile",
    title: "프로필",
    to: "/profile",
    icon: <PeopleTag />,
  },
  {
    id: "bookmark",
    title: "입덕 애니",
    to: "/my-animations",
    icon: <Tv />,
  },
  {
    id: "settings",
    title: "설정",
    to: "/settings",
    icon: <Settings />,
  },
];

const helpMenuItems: IMenu[] = [
  {
    id: "notice",
    title: "공지사항",
    to: "/notices",
    icon: <Megaphone />,
  },
  {
    id: "helpdesk",
    title: "고객센터",
    to: "/helpdesk",
    icon: <HeadsetHelp />,
  },
];

export default function Menus() {
  const handleClickUserMenu = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    // TODO: id와 인증상태에 따른 처리
    return;
  };

  const handleClickHelpMenu = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    // TODO: id와 인증상태에 따른 처리
    return;
  };

  return (
    <Container>
      <UserMenus>
        {userMenuItems.map((item) => (
          <Menu key={item.id} menu={item} onClick={handleClickUserMenu} />
        ))}
      </UserMenus>
      <Divider />
      <HelpMenus>
        {helpMenuItems.map((item) => (
          <Menu key={item.id} menu={item} onClick={handleClickHelpMenu} />
        ))}
      </HelpMenus>
    </Container>
  );
}
