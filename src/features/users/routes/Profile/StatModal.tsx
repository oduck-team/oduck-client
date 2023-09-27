import Button from "@/components/Button";
import Modal from "@/components/Modal";

import { ContentContainer, Data, Title, Section } from "./StatModal.style";

const TITLE_LIST = ["한줄리뷰", "스레드", "받은 좋아요 수", "포인트"];

interface StatItemProps {
  data: string;
  description: string;
}

interface StatModalProps {
  isVisible: boolean;
  items: StatItemProps[];
  onClose: () => void;
}

export default function StatModal({
  isVisible,
  items,
  onClose,
}: StatModalProps) {
  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <Modal.Content>
        <ContentContainer>
          {items.map((title, index) => (
            <Section key={index}>
              <Title>{TITLE_LIST[index]}</Title>
              <Data>{title.data}</Data>
            </Section>
          ))}
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
          닫기
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
