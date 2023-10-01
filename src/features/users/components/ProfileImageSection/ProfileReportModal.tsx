import { X } from "@phosphor-icons/react";

import Button from "@/components/Button";
import Modal from "@/components/Modal";

import { CloseButton, Header, Title } from "./ProfileReportModal.style";

interface ProfileReportModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function ProfileReportModal({
  isVisible,
  onClose,
}: ProfileReportModalProps) {
  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <Modal.Content>
        <Header>
          <Title>신고하기</Title>
          <CloseButton type="button" onClick={onClose}>
            <X size={28} />
          </CloseButton>
        </Header>

        <select>
          <option value="부적절한 닉네임/자기소개">
            부적절한 닉네임/자기소개
          </option>
          <option value="기타 신고">기타 신고</option>
        </select>
      </Modal.Content>
      <Modal.Actions>
        <Button
          variant="text"
          name="닫기"
          color="neutral"
          isBlock
          onClick={onClose}
        >
          취소
        </Button>
        <Button
          variant="solid"
          name="신고"
          color="primary"
          isBlock
          onClick={() => {}}
        >
          신고
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
