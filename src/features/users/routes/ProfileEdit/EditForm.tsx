import Button from "@/components/Button";
import Textarea from "@/components/TextArea";
import TextInput from "@/components/TextInput";

import {
  ButtonContainer,
  EditFormContainer,
  Form,
  Title,
} from "./EditForm.style";

export default function EditForm() {
  return (
    <EditFormContainer>
      <Form>
        <div>
          <Title isRequired>닉네임</Title>
          <TextInput placeholder="" />
        </div>
        <div>
          <Title>자기소개</Title>
          <Textarea placeholder="자기소개를 적어보세요(최대 100자까지 가능합니다)" />
        </div>
      </Form>
      <ButtonContainer>
        <Button name="저장" color="primary" isBlock size="lg">
          저장
        </Button>
        <Button name="취소" color="neutral" isBlock size="lg">
          취소
        </Button>
      </ButtonContainer>
    </EditFormContainer>
  );
}
