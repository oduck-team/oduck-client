import styled from "@emotion/styled";
import { Link } from "react-router-dom";

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
    <Container>
      <Link
        to={item.to}
        onClick={onClick ? (e) => onClick(item.id, e) : undefined}
      >
        {item.icon}
        {item.title}
      </Link>
    </Container>
  );
}

const Container = styled.li`
  & > a {
    ${({ theme }) => theme.typo["body-2-m"]}
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0 1rem;
    height: 40px;
    border-radius: 6px;
    transition: colors 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.neutral["10"]};
    }
    &:active {
      background-color: ${({ theme }) => theme.colors.neutral["20"]};
    }
  }
`;
