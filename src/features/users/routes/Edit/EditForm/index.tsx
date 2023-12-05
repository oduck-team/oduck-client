import { useNavigate } from "react-router-dom";

import Button from "@/components/Button";
import Textarea from "@/components/TextArea";
import TextInput from "@/components/TextInput";
import useEditForm from "@/features/users/hooks/useEditForm";

import { ButtonContainer, EditFormContainer, Form, Title } from "./style";

interface EditFromProps {
  name: string;
  description: string;
}

export default function EditForm({ name, description }: EditFromProps) {
  const { form, status, isFormChange, handleInputChange, handleFormSumbit } =
    useEditForm(name, description);
  const navigate = useNavigate();

  return (
    <EditFormContainer>
      <Form onSubmit={handleFormSumbit}>
        <div>
          <Title isRequired>닉네임</Title>
          <TextInput
            required
            name="name"
            value={form.name}
            maxLength={10}
            message={status.message}
            warn={status.isWarn}
            spellCheck={false}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div>
          <Title>자기소개</Title>
          <Textarea
            name="description"
            value={form.description}
            placeholder="자기소개를 적어보세요(최대 100자까지 가능합니다)"
            maxLength={100}
            spellCheck={false}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      </Form>
      <ButtonContainer>
        <Button
          type="submit"
          name="저장"
          color={isFormChange ? "primary" : "neutral"}
          isBlock
          size="lg"
          onClick={handleFormSumbit}
        >
          저장
        </Button>
        <Button
          name="취소"
          color="neutral"
          isBlock
          size="lg"
          onClick={() => navigate("/profile")}
        >
          취소
        </Button>
      </ButtonContainer>
    </EditFormContainer>
  );
}
