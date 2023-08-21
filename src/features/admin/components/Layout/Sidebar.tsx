import { Navbar, NavbarProps } from "@mantine/core";

import Menus from "./Menus";
import { Header } from "./Sidebar.style";

export default function Sidebar(props: Omit<NavbarProps, "children">) {
  return (
    <Navbar {...props}>
      <Header>
        <h1>관리자 메뉴</h1>
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
      </Header>
      <Navbar.Section grow>
        <Menus />
      </Navbar.Section>
    </Navbar>
  );
}
