import { X } from "@phosphor-icons/react";
import { useState } from "react";

import Button from "@/components/Button";
import Modal from "@/components/Modal";
import SelectBox from "@/components/SelectBox";
import useSnackBar from "@/components/SnackBar/useSnackBar";

import { CloseButton, Header, Title } from "./ProfileReportModal.style";

const OPTION = [
  {
    value: "부적절한 닉네임/자기소개",
    text: "부적절한 닉네임/자기소개",
  },
  { value: "기타 신고", text: "기타 신고" },
];

interface ProfileReportModalProps {
  onClose: () => void;
}

export default function ProfileReportModal({
  onClose,
}: ProfileReportModalProps) {
  const snackBar = useSnackBar();
  const [selected, setSelected] = useState(OPTION[0].value);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSelected(e.target.value);
  const handleReportSumbit = () => {
    onClose();
    snackBar?.open({ message: "신고가 접수되었습니다." });
  };

  return (
    <>
      <Modal onClose={onClose}>
        <Modal.Content>
          <Header>
            <Title>신고하기</Title>
            <CloseButton type="button" onClick={onClose}>
              <X size={24} />
            </CloseButton>
          </Header>
          <SelectBox
            options={OPTION}
            selected={selected}
            onChange={handleSelectChange}
          />
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
            onClick={handleReportSumbit}
          >
            신고
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}
