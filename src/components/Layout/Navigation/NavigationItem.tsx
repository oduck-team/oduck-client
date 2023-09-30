import { Link } from "react-router-dom";

import { NavigationItemContainer } from "./NavigationItem.style";

export interface NavItem {
  id: string;
  title: string;
  to: string;
  icon: React.ReactNode;
}

interface NavigationItemProps {
  item: NavItem;
  onClick?: (id: string, e: React.MouseEvent) => void;
}

export default function NavigationItem({ item, onClick }: NavigationItemProps) {
  return (
    <NavigationItemContainer>
      <Link
        to={item.to}
        onClick={onClick ? (e) => onClick(item.id, e) : undefined}
      >
        {item.icon}
        {item.title}
      </Link>
    </NavigationItemContainer>
  );
}
