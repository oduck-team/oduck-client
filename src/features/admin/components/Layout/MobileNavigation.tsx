import { Button } from "antd";
import { Menu, Cancel } from "iconoir-react";

import Menus from "./Menus";
import { Container, Header, Profile } from "./MobileNavigation.style";

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
