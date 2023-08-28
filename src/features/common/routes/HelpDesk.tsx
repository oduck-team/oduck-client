import styled from "@emotion/styled";
import { Mail } from "iconoir-react";
import { useState } from "react";

import Button from "@/components/Button";
import Head from "@/components/Head";
import Textarea from "@/components/TextArea";
import TextInput from "@/components/TextInput";

export default function HelpDesk() {
  const [selected, setSelected] = useState(0);
  const itemText = ["기능 추가 건의", "버그 신고", "기타 문의"];
  const [translateX, setTranslateX] = useState(0);
  const [email, setEmail] = useState("");
  const [inquiryContent, setInquiryContent] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [contentError, setContentError] = useState(false);

  const handlerItem = (i: number) => {
    setSelected(i + 1);
    setTranslateX(-50);
  };

  const goPrev = () => {
    setTranslateX(0);
    setSelected(0);
    setEmailError(false);
    setContentError(false);
    setEmail("");
    setInquiryContent("");
  };

  const handlerEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlerContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInquiryContent(e.target.value);
  };

  const send = () => {
    if (email === "") setEmailError(true);
    else setEmailError(false);
    if (inquiryContent === "") setContentError(true);
    else setContentError(false);
  };

  return (
    <>
      <Head title="오덕 | 고객센터" />
      <Container>
        <Slide translateX={translateX}>
          <SelectArea>
            <h1>무엇을 도와드릴까요?</h1>
            <p>해당되는 항목을 선택해주세요.</p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "18px" }}
            >
              {itemText.map((text, i) => (
                <ItemButton
                  name={text}
                  color="neutral"
                  size="lg"
                  key={i}
                  onClick={() => handlerItem(i)}
                >
                  {text}
                </ItemButton>
              ))}
            </div>
          </SelectArea>
          <FormArea>
            <h3>{itemText[selected - 1]}</h3>
            <EmailTextInput
              value={email}
              type="email"
              placeholder="답변 받을 이메일 주소"
              onChange={handlerEmailChange}
              warn={emailError}
              message="이메일을 입력해 주세요."
              icon={<Mail width={20} height={20} />}
              required
            />
            <InquiryContentTextarea
              value={inquiryContent}
              onChange={handlerContentChange}
              placeholder="문의할 내용을 작성해 주세요.&#13;&#10;빠른 시일 내에 답변드릴게요!"
              warn={contentError}
              message="문의 내용을 입력해 주세요."
              required
            />
            <ButtonContainer>
              <Button color="neutral" name="취소" onClick={goPrev}>
                이전
              </Button>
              <Button name="보내기" onClick={send}>
                보내기
              </Button>
            </ButtonContainer>
          </FormArea>
        </Slide>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-bottom: 66px;
  overflow: hidden;
`;

const Slide = styled.div<{ translateX?: number }>`
  width: 200%;
  height: 100%;
  display: flex;
  transform: ${({ translateX = 0 }) => `translateX(${translateX}%)`};
  transition: all 0.3s;
`;

const SelectArea = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  padding: 100px 16px 0;
  flex-shrink: 0;
  background-color: #e5e5ea;
  h1 {
    ${({ theme }) => theme.typo["title-1-b"]};
    line-height: normal;
    margin-bottom: 6px;
  }
  p {
    ${({ theme }) => theme.typo["title-3-m"]};
    margin-bottom: 33px;
  }
`;

const ItemButton = styled(Button)`
  height: 60px;
  ${({ theme }) => theme.typo["body-1-m"]};
  background-color: #ffffff;
  -webkit-tap-highlight-color: transparent !important;
`;

const FormArea = styled.div`
  width: 50%;
  flex-shrink: 0;
  background-color: #e5e5ea;
  padding: 25px 16px 20px;

  & > h3 {
    color: ${({ theme }) => theme.colors["neutral"]["80"]};
    ${({ theme }) => theme.typo["title-2-b"]};
  }
`;

const EmailTextInput = styled(TextInput)`
  width: 100%;
  margin: 8px 0 15px;
  & > input {
    border-radius: 12px;
  }
`;

const InquiryContentTextarea = styled(Textarea)`
  width: 100%;
  height: 60%;
  & > textarea {
    border-radius: 12px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 8px;
  margin-top: 20px;
  flex-shrink: 0;

  button {
    width: 100%;
    height: 40px;
  }
`;
