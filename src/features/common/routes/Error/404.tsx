import {
  Container,
  Content,
  ErrorImage,
  Message,
  HomeButton,
} from "./404.style";

export default function NotFound() {
  return (
    <Container>
      <Content>
        <div>
          <ErrorImage src="/logo/logo-empty.png" alt="error" />
        </div>
        <Message>페이지를 찾을 수 없어요</Message>
        <div>
          <HomeButton size="lg" to="/">
            홈으로
          </HomeButton>
        </div>
      </Content>
    </Container>
  );
}
