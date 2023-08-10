import styled from "@emotion/styled";
import { Button } from "antd";
import { Menu, Cancel } from "iconoir-react";

import Menus from "./Menus";

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
          icon={isActive ? <Cancel /> : <Menu />}
          onClick={setIsActive}
        ></Button>
      </Header>
      {isActive && (
        <Menus
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
