import { useNavigate } from "react-router-dom";

import { Container, Item } from "./style";

interface NavigationItem {
  readonly key: string;
  readonly to: string;
  readonly icon: React.ReactNode;
  readonly label: React.ReactNode;
}

interface BottomNavigationProps {
  readonly title: string;
  readonly activeKey?: string; // 활성화(선택된) item의 key
  readonly items: NavigationItem[];
  readonly onClickItem?: (key: string, e: React.MouseEvent) => void;
}

export default function BottomNavigation({
  title = "네비게이션",
  activeKey,
  items,
  onClickItem,
}: BottomNavigationProps) {
  const navigate = useNavigate();

  const handleItemClick = (key: string, to: string, e: React.MouseEvent) => {
    if (onClickItem) {
      onClickItem(key, e);
    } else {
      navigate(to); // onClickItem이 없을땐 라우팅 처리
    }
  };

  return (
    <Container>
      <h1>{title}</h1>
      <ul>
        {items.map((item) => (
          <li key={item.key}>
            <Item
              isActive={activeKey === item.key}
              onClick={(e) => handleItemClick(item.key, item.to, e)}
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
