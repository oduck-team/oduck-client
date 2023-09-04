import { Container, Item } from "./style";

export interface INavigationItem {
  id: string;
  to: string;
  icon: React.ReactNode;
  label: React.ReactNode;
}

interface BottomNavigationProps {
  title: string;
  activeId?: string; // 활성화(선택된) item의 id
  items: INavigationItem[];
  onClickItem: (id: string, e: React.MouseEvent) => void;
}

export default function BottomNavigation({
  title = "네비게이션",
  activeId,
  items,
  onClickItem,
}: BottomNavigationProps) {
  return (
    <Container>
      <h1>{title}</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Item
              isActive={activeId === item.id}
              href={item.to}
              onClick={(e) => onClickItem(item.id, e)}
            >
              {item.icon}
              <span>{item.label}</span>
            </Item>
          </li>
        ))}
      </ul>
    </Container>
  );
}
