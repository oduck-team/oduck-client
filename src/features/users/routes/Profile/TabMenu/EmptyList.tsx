import { useNavigate } from "react-router-dom";

import {
  EmptyImage,
  EmptyListButton,
  EmptyListContainer,
  Message,
} from "./EmptyList.style";

interface EmptyListProps {
  message: string;
  buttonText: string;
  linkTo: string;
}

export default function EmptyList({
  message,
  buttonText,
  linkTo,
}: EmptyListProps) {
  const navigate = useNavigate();
  const handleClick = () => navigate(linkTo);
  return (
    <EmptyListContainer>
      <EmptyImage src="/logo/logo-empty.png" alt="등록된 아이템이 없어요." />
      <Message>{message}</Message>
      <EmptyListButton name={buttonText} size="lg" onClick={handleClick}>
        {buttonText}
      </EmptyListButton>
    </EmptyListContainer>
  );
}
