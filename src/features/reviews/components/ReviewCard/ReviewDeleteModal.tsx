import Button from "@/components/Button";
import Modal from "@/components/Modal";

import { Text } from "./ReviewDeleteModal.style";

interface Props {
  reviewId: number;
  animeId: number;
  onClose: () => void;
}

export default function ReviewDeleteModal({
  reviewId,
  animeId,
  onClose,
}: Props) {
  return (
    <Modal size="sm" onClose={onClose}>
      <Modal.Content>
        <Text>리뷰를 삭제하시겠어요?</Text>
      </Modal.Content>
      <Modal.Actions>
        <Button color="neutral" name="취소" isBlock onClick={onClose}>
          취소
        </Button>
        <Button color="warn" name="삭제" isBlock>
          삭제
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
