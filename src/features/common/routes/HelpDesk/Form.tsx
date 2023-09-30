import Button from "@/components/Button";

import { Content, FormItem, FormTextInput, FormTextarea } from "./Form.style";
import { Container } from "./Select.style";
import useForm from "./useForm";

interface Props {
  goPrev: () => void;
  inquiryTypeName: string;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Form({ setSuccess }: Props) {
  const { form, error, handleInputChange, errorMessage, send } = useForm();

  return (
    <Container>
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
        <p style={{ marginTop: "30px" }}>개인 정보 처리 및 약관 동의</p>
        <Button
          size="lg"
          style={{ width: "100%", height: "48px", marginTop: "50px" }}
          name="보내기"
          onClick={() => send(setSuccess)}
        >
          보내기
        </Button>
      </Content>
    </Container>
  );
}
