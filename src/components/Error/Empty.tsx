import { EmptyContainer, ErrorImage, Message } from "./Empty.style";

interface EmptyProps {
  message: string;
}

/* 리소스를 찾을 수 없다는 것을 렌더링할 때 사용할 수 있습니다 */
export default function Empty({ message }: EmptyProps) {
  return (
    <EmptyContainer>
      <div>
        <ErrorImage src="/logo/logo-empty.png" alt="empty-error" />
      </div>
      <Message>{message}</Message>
    </EmptyContainer>
  );
}
