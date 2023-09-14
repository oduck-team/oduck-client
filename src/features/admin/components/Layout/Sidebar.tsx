import styled from "@emotion/styled";
import { Navbar, NavbarProps } from "@mantine/core";

import Menus from "./Menus";
import Profile from "./Profile";

export default function Sidebar(props: Omit<NavbarProps, "children">) {
  return (
    <Navbar {...props}>
      <Header>
        <h1>관리자 메뉴</h1>
        <Profile />
      </Header>
      <Navbar.Section grow>
        <Menus />
      </Navbar.Section>
    </Navbar>
  );
}

const Header = styled.header`
  display: flex;
  gap: 0.5rem;
  padding-left: 0rem;
  padding-bottom: 1rem;
  border-bottom: solid 1px ${({ theme }) => theme.colors.neutral["30"]};
  overflow: hidden;
  transition: padding 0.3s;

  & h1 {
    display: none;
  }
`;
