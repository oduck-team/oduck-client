import {
  NotFoundContainer,
  Content,
  ErrorImage,
  Message,
  HomeButton,
} from "./style";

export default function NotFound() {
  return (
    <NotFoundContainer>
      <Content>
        <div>
          <ErrorImage src="/logo/logo-empty.png" alt="error" />
        </div>
        <Message>페이지를 찾을 수 없어요</Message>
        <div>
          <HomeButton size="lg" to="/" reloadDocument>
            홈으로
          </HomeButton>
        </div>
      </Content>
    </NotFoundContainer>
  );
}
