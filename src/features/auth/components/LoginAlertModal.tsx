import { useLocation, useNavigate } from "react-router-dom";

import Button from "@/components/Button";
import Modal from "@/components/Modal";
import useRedirect from "@/hooks/useRedirect";

import { Text } from "./LoginAlertModal.style";

interface LoginAlertModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function LoginAlertModal({
  isVisible,
  onClose,
}: LoginAlertModalProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { setRedirect } = useRedirect();

  /**
   * 현재 페이지를 리다이렉트로 지정후 로그인페이지로 이동합니다.
   */
  const handleClickLogin = () => {
    setRedirect(location.pathname);
    navigate("/login");
  };

  return (
    <>
      <Modal isVisible={isVisible} size="md" onClose={onClose}>
        <Modal.Content>
          <Text>로그인이 필요해요</Text>
        </Modal.Content>
        <Modal.Actions direction="row">
          <Button
            name="닫기"
            variant="solid"
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
