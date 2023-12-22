import Button from "@/components/Button";
import Modal from "@/components/Modal";

interface ImageCropModalProps {
  onClose: () => void;
}

export default function ImageCropModal({ onClose }: ImageCropModalProps) {
  return (
    <Modal onClose={onClose}>
      <Modal.Content>
        <span>이미지영역</span>
      </Modal.Content>
      <Modal.Actions>
        <Button
          variant="text"
          name="취소"
          color="neutral"
          isBlock
          onClick={onClose}
        >
          취소
        </Button>
        <Button
          variant="solid"
          name="완료"
          color="primary"
          isBlock
          onClick={() => {}}
        >
          완료
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
