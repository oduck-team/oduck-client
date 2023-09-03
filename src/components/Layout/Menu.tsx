import { Link } from "react-router-dom";

import { Container } from "./Menu.style";

export interface IMenu {
  id: string;
  title: string;
  to: string;
  icon: React.ReactNode;
}

interface MenuProps {
  menu: IMenu;
  onClick: (id: string, e: React.MouseEvent) => void;
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
