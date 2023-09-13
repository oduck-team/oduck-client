import styled from "@emotion/styled";

import Button from "@/components/Button";
import Modal from "@/components/Modal";
import TextInput from "@/components/TextInput";

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

export default function NameModal({ isVisible, onClose }: Props) {
  const handlerSetName = () => {
    // TODO 닉네임 패턴 검사
    // TODO api request
    onClose();
  };

  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <Modal.Content>
        <ModalContentText>
          환영합니다! <br /> 오덕에서 사용할 닉네임을 설정해 주세요.
        </ModalContentText>
        <TextInput style={{ width: "100%" }} placeholder="닉네임" />
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
