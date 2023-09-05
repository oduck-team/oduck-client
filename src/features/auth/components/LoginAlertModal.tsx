import { useNavigate } from "react-router-dom";

import Button from "@/components/Button";
import Modal from "@/components/Modal";

import { Text } from "./LoginAlertModal.style";

interface LoginAlertModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginAlertModal({
  isOpen,
  onClose,
}: LoginAlertModalProps) {
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <Modal isOpen={isOpen} size="md" onClose={onClose}>
        <Modal.Content>
          <Text>로그인이 필요해요</Text>
        </Modal.Content>
        <Modal.Actions direction="row">
          <Button
            name="닫기"
            styleType="solid"
            color="neutral"
            size="lg"
            isBlock
            onClick={onClose}
          >
            닫기
          </Button>
          <Button name="로그인" isBlock size="lg" onClick={handleClickLogin}>
            로그인
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}
