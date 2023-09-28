import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const [input, setInput] = useState({ name: "", description: "" });
  const [warn, setWarn] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  //TODO: 닉네임 중복 검사 추가
  const handleFormSumbit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isNameRegxCheck(input.name)) {
      setWarn(false);
      setMessage("");
    } else {
      setWarn(true);
      setMessage(
        "한글, 영문, 숫자만 입력 가능합니다. 한글 또는 영문은 반드시 포함하여 2자~10자 닉네임을 설정해주세요.",
      );
    }
  };

  const isNameRegxCheck = (name: string) => {
    const namePattern = /^(?=.*[a-zA-Z가-힣])[A-Za-z가-힣0-9]{2,10}$/;
    return namePattern.test(name);
  };

  return (
    <EditFormContainer>
      <Form onSubmit={handleFormSumbit}>
        <div>
          <Title isRequired>닉네임</Title>
          <TextInput
            required
            name="name"
            value={input.name}
            onChange={(e) => handleInputChange(e)}
            message={message}
            warn={warn}
          />
        </div>
        <div>
          <Title>자기소개</Title>
          <Textarea
            name="description"
            value={input.description}
            placeholder="자기소개를 적어보세요(최대 100자까지 가능합니다)"
            maxLength={100}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      </Form>
      <ButtonContainer>
        <Button
          type="submit"
          name="저장"
          color="primary"
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
