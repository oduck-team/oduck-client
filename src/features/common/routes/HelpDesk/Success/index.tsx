import { useNavigate } from "react-router-dom";

import Button from "@/components/Button";
import Header from "@/components/Layout/Header";

import { Content } from "../Select/style";

import { SuccessContainer } from "./style";

export default function Success() {
  const navigate = useNavigate();

  return (
    <SuccessContainer>
      <Header>
        <Header.Left />
        <Header.Center>
          <h1>발송 완료</h1>
        </Header.Center>
      </Header>
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
    </SuccessContainer>
  );
}
