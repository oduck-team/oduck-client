import { X } from "@phosphor-icons/react";

import Button from "@/components/Button";
import Modal from "@/components/Modal";

import {
  CloseButton,
  ContentContainer,
  Title,
} from "./BookmarkDeleteModal.style";

interface BookmarkDelteModalProps {
  onClose: () => void;
}

export default function BookmarkDelteModal({
  onClose,
}: BookmarkDelteModalProps) {
  return (
    <>
      <Modal onClose={onClose} size="sm">
        <Modal.Content>
          <ContentContainer>
            <CloseButton type="button" onClick={onClose}>
              <X size={24} />
            </CloseButton>
            <Title>애니를 삭제하시겠습니까?</Title>
          </ContentContainer>
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
            name="삭제"
            color="warn"
            isBlock
            onClick={() => {}}
          >
            삭제
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}
