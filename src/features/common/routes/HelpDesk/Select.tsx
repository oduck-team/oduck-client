import { NavArrowLeft } from "iconoir-react";
import { useNavigate } from "react-router-dom";

import Button from "@/components/Button";
import Header from "@/components/Layout/Header";

import { Buttons, Container, Content } from "./Select.style";

interface Props {
  inquiryTypeName: string[];
  onClick: (i: number) => void;
}

export default function Select({ inquiryTypeName, onClick }: Props) {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <Header.Left>
          <NavArrowLeft onClick={() => navigate(-1)} />
        </Header.Left>
        <Header.Center>고객센터</Header.Center>
      </Header>
      <Content>
        <div>
          <h1>어떤 문제를 해결해 드릴까요?</h1>
          <p>해당되는 항목을 선택해 주세요.</p>
        </div>
        <Buttons>
          {inquiryTypeName.map((name, i) => (
            <Button
              name={name}
              color="neutral"
              size="lg"
              key={i}
              onClick={() => onClick(i)}
            >
              {name}
            </Button>
          ))}
        </Buttons>
      </Content>
    </Container>
  );
}
