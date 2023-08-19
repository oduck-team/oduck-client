import { Link } from "react-router-dom";

import { Container } from "./Menu.style";

export interface IMenu {
  readonly id: string;
  readonly title: string;
  readonly to: string;
  readonly icon: React.ReactNode;
}

interface MenuProps {
  readonly menu: IMenu;
  readonly onClick: (id: string, e: React.MouseEvent) => void;
}

export default function Menu({ menu, onClick }: MenuProps) {
  return (
    <Container onClick={(e) => onClick(menu.id, e)}>
      <Link to={menu.to}>
        {menu.icon}
        {menu.title}
      </Link>
    </Container>
  );
}
