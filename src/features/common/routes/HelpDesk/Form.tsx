import { NavArrowLeft } from "iconoir-react";

import Button from "@/components/Button";

import { Content, FormItem, FormTextInput, FormTextarea } from "./Form.style";
import { Container, Header } from "./Select.style";
import useForm from "./useForm";

interface Props {
  goPrev: () => void;
  inquiryTypeName: string;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Form({ goPrev, inquiryTypeName, setSuccess }: Props) {
  const {
    email,
    title,
    inquiryContent,
    emailError,
    titleError,
    contentError,
    emailErrorMessage,
    titleErrorMessage,
    contentErrorMessage,
    handleEmailChange,
    handleTitleChange,
    handleContentChange,
    send,
    resetForm,
  } = useForm({ setSuccess });

  const handlerPrevClick = () => {
    goPrev();
    resetForm();
  };

  return (
    <Container>
      <Header>
        <NavArrowLeft onClick={handlerPrevClick} />
        {inquiryTypeName}
      </Header>
      <Content>
        <FormItem>
          <h4>보내는 사람</h4>
          <FormTextInput
            value={email}
            type="email"
            placeholder="이메일을 입력해 주세요."
            onChange={handleEmailChange}
            warn={Boolean(emailError)}
            message={emailError ? emailErrorMessage[emailError] : ""}
            required
          />
        </FormItem>
        <FormItem>
          <h4>문의 제목</h4>
          <FormTextInput
            value={title}
            type="text"
            placeholder="제목을 입력해 주세요.(최대 50자)"
            onChange={handleTitleChange}
            warn={Boolean(titleError)}
            message={titleError ? titleErrorMessage[titleError] : ""}
            required
          />
        </FormItem>
        <FormItem textarea>
          <h4>문의 내용</h4>
          <FormTextarea
            value={inquiryContent}
            onChange={handleContentChange}
            placeholder="내용을 입력해 주세요.(최대 1,000자)"
            warn={Boolean(contentError)}
            message={contentError ? contentErrorMessage[contentError] : ""}
            required
          />
        </FormItem>
        <p style={{ marginTop: "30px" }}>개인 정보 처리 및 약관 동의</p>
        <Button
          size="lg"
          style={{ width: "100%", height: "48px", marginTop: "50px" }}
          name="보내기"
          onClick={send}
        >
          보내기
        </Button>
      </Content>
    </Container>
  );
}
