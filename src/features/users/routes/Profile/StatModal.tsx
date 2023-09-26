import Button from "@/components/Button";
import Modal from "@/components/Modal";

import { ContentContainer, Data, Title, Section } from "./StatModal.style";

const TITLE_LIST = ["한줄리뷰", "스레드", "받은 좋아요 수", "포인트"];

interface StatModalProps {
  isVisible: boolean;
  dataList: string[];
  onClose: () => void;
}

export default function StatModal({
  isVisible,
  dataList,
  onClose,
}: StatModalProps) {
  return (
    <Modal isVisible={isVisible} onClose={onClose} size="sm">
      <Modal.Content>
        <ContentContainer>
          <Section>
            {TITLE_LIST.map((title, index) => (
              <Title key={index}>{title}</Title>
            ))}
          </Section>
          <Section>
            {dataList.map((data, index) => (
              <Data key={index}>{parseInt(data).toLocaleString()}</Data>
            ))}
          </Section>
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
