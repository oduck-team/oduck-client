import Button from "@/components/Button";
import Modal from "@/components/Modal";
import useToast from "@/components/Toast/useToast";
import useReview from "@/features/reviews/hook/useReview";
import useDebounce from "@/hooks/useDebounce";

import { Text } from "./ReviewDeleteModal.style";

interface Props {
  reviewId: number;
  animeId: number;
  onClose: () => void;
}

const DEBOUNCE_DELAY = 200;

export default function ReviewDeleteModal({
  reviewId,
  animeId,
  onClose,
}: Props) {
  const { deleteReview } = useReview(animeId, onClose);
  const { success } = useToast();

  const handleClickDelete = useDebounce(() => {
    deleteReview.mutate(reviewId, {
      onSuccess: () => {
        success({ message: "리뷰가 삭제되었어요." });
      },
    });
  }, DEBOUNCE_DELAY);

  return (
    <Modal size="sm" onClose={onClose}>
      <Modal.Content>
        <Text>리뷰를 삭제하시겠어요?</Text>
      </Modal.Content>
      <Modal.Actions>
        <Button color="neutral" name="취소" isBlock onClick={onClose}>
          취소
        </Button>
        <Button color="warn" name="삭제" isBlock onClick={handleClickDelete}>
          삭제
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
