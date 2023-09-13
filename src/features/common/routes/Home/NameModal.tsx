import styled from "@emotion/styled";
import { useState } from "react";

import Button from "@/components/Button";
import Modal from "@/components/Modal";
import TextInput from "@/components/TextInput";
import useSignUp from "@/features/auth/hooks/useSignUp";
import useAuth from "@/hooks/useAuth";

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

export default function NameModal({ isVisible, onClose }: Props) {
  const { handleSignUp } = useSignUp();
  const { fetchUser } = useAuth();
  const [name, setName] = useState("");
  const [error, setError] = useState(0);
  const errorMessage = [
    "",
    "닉네임을 입력해 주세요.",
    "닉네임은 2~10자로, 한글 또는 영어를 반드시 포함해야 합니다.",
  ];

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlerSetName = async () => {
    // 닉네임 패턴 검사
    const namePattern = /^(?=.*[a-zA-Z가-힣])[A-Za-z가-힣0-9]{2,10}$/;
    setError(() => {
      if (name === "") return 1;
      else if (!namePattern.test(name)) return 2;
      else return 0;
    });
    if (namePattern.test(name)) {
      // api 요청
      const { nameError } = await handleSignUp(name);
      if (nameError) {
        console.log("error", nameError);
      } else {
        fetchUser();
        onClose();
      }
    }
  };

  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <Modal.Content>
        <ModalContentText>
          환영합니다! <br /> 오덕에서 사용할 닉네임을 설정해 주세요.
        </ModalContentText>
        <TextInput
          style={{ width: "100%" }}
          placeholder="닉네임 (2~10자, 한글 또는 영어 필수)"
          value={name}
          onChange={onChangeName}
          warn={Boolean(error)}
          message={errorMessage[error]}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button
          style={{ margin: "6px 8px 0" }}
          name="확인"
          isBlock
          onClick={handlerSetName}
        >
          확인
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

const ModalContentText = styled.p`
  ${({ theme }) => theme.typo["title-3-m"]};
  margin-bottom: 8px;
`;
