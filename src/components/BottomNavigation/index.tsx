import { Container, Item } from "./style";

export interface INavigationItem {
  readonly id: string;
  readonly to: string;
  readonly icon: React.ReactNode;
  readonly label: React.ReactNode;
}

interface BottomNavigationProps {
  readonly title: string;
  readonly activeId?: string; // 활성화(선택된) item의 id
  readonly items: INavigationItem[];
  readonly onClickItem: (id: string, e: React.MouseEvent) => void;
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
