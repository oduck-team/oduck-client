import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import Button from "@/components/Button";

import { Container as BaseContainer, Content, Header } from "./Select.style";

export default function Success() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>발송 완료</Header>
      <Content>
        <div>
          <h1>문의가 완료되었습니다.</h1>
          <p>
            회원님의 문의사항을 신속히 조치하여 빠른 시일 내에 <br /> 작성하신
            이메일로 발송해 드리겠습니다.
          </p>
        </div>
        <Button
          size="lg"
          style={{ width: "100%", height: "48px" }}
          name="홈"
          onClick={() => navigate("/")}
        >
          홈으로
        </Button>
      </Content>
    </Container>
  );
}

const Container = styled(BaseContainer)`
  width: 100%;
`;
