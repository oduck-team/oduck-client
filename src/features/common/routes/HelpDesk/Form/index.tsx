import { useEffect } from "react";
import { Link } from "react-router-dom";

import Button from "@/components/Button";
import CheckBox from "@/components/CheckBox";
import useInquiryForm from "@/features/common/hooks/useInquiryForm";

import { SelectContainer as FormContainer } from "../Select/style";

import { Content, FormItem, FormTextInput, FormTextarea, Terms } from "./style";

interface Props {
  inquiryType: number;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Form({ inquiryType, setSuccess }: Props) {
  const {
    form,
    agree,
    error,
    handleInputChange,
    handleAgreeChange,
    errorMessage,
    send,
    resetForm,
  } = useInquiryForm();

  useEffect(() => {
    if (inquiryType === 0) resetForm();
  }, [inquiryType, resetForm]);

  return (
    <FormContainer>
      <Content>
        <FormItem>
          <h4>보내는 사람</h4>
          <FormTextInput
            value={form.email}
            type="email"
            name="email"
            placeholder="이메일을 입력해 주세요."
            onChange={handleInputChange}
            warn={Boolean(error.email)}
            message={error.email ? errorMessage.email[error.email] : ""}
            required
          />
        </FormItem>
        <FormItem>
          <h4>문의 제목</h4>
          <FormTextInput
            value={form.title}
            type="text"
            name="title"
            placeholder="제목을 입력해 주세요.(최대 50자)"
            onChange={handleInputChange}
            warn={Boolean(error.title)}
            message={error.title ? errorMessage.title[error.title] : ""}
            required
          />
        </FormItem>
        <FormItem textarea>
          <h4>문의 내용</h4>
          <FormTextarea
            value={form.content}
            name="content"
            onChange={handleInputChange}
            placeholder="내용을 입력해 주세요.(최대 1,000자)"
            warn={Boolean(error.content)}
            message={error.content ? errorMessage.content[error.content] : ""}
            required
          />
        </FormItem>
        <Terms>
          <CheckBox
            id="agree"
            name="agree"
            checked={agree}
            onChange={handleAgreeChange}
          />
          <label htmlFor="agree">
            개인정보 처리 및 <Link to="/terms/email">이용 약관 동의</Link>
          </label>
        </Terms>
        <Button size="lg" name="보내기" onClick={() => send(setSuccess)}>
          보내기
        </Button>
      </Content>
    </FormContainer>
  );
}
