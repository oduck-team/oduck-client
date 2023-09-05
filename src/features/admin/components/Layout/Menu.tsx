import { NavLink } from "@mantine/core";

export interface IMenu {
  id: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  to: string;
  initialOpened?: boolean; // 자식 아이템 목록 열림 여부
  children?: IMenu[];
}

interface MenuProps {
  menu: IMenu;
  onClick: (e: React.MouseEvent, to: string) => void;
}

export default function Menu({ menu, onClick }: MenuProps) {
  const hasChildrens = Array.isArray(menu.children); // 자식 아이템 소유 여부
  const items = // 자식 아이템 목록
    (hasChildrens ? menu.children : []).map((item) => (
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
      label={menu.label}
      icon={menu.icon}
      opened={menu.initialOpened}
      // 자식 메뉴가 있다면 메뉴 펼치기, 없다면 이벤트
      onClick={hasChildrens ? undefined : (e) => onClick(e, menu.to)}
    >
      {hasChildrens && items}
    </NavLink>
  );
}
