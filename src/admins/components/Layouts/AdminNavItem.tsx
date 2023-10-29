import { NavLink } from "@mantine/core";

import classes from "./AdminNavItem.module.css";

export interface NavItem {
  id: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  to: string;
  initialOpened?: boolean; // 자식 아이템 목록 열림 여부
  children?: NavItem[]; // 하위 아이템
}

interface AdminNavItemProps {
  item: NavItem;
  isActive?: boolean;
  onClick: (e: React.MouseEvent, to: string) => void;
}

export default function AdminNavItem({
  item,
  isActive,
  onClick,
}: AdminNavItemProps) {
  const hasChildrens = Array.isArray(item.children); // 자식 아이템 소유 여부
  const items = // 자식 아이템 목록
    (hasChildrens && item.children ? item.children : []).map((item) => (
      <NavLink
        key={item.id}
        component="a"
        label={item.label}
        href={item.to}
        onClick={(e) => onClick(e, item.to)}
      />
    ));

  return (
    <NavLink
      component="a"
      label={item.label}
      leftSection={item.icon}
      opened={item.initialOpened}
      className={isActive ? classes.active : undefined}
      // 자식 메뉴가 있다면 메뉴 펼치기, 없다면 이벤트
      onClick={hasChildrens ? undefined : (e) => onClick(e, item.to)}
    >
      {hasChildrens && items}
    </NavLink>
  );
}
