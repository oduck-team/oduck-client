import { PropsWithChildren, useState } from "react";

import Modal from "@/components/Modal";
import Textarea from "@/components/TextArea";

import AttractionPoint from "../AttractionPoint";

import {
  Title,
  AttractionPointSection,
  AttractionPointList,
  Button,
  ReviewContentSection,
} from "./ShortReviewModal.style";
import SpoilerCheckBox from "./SpoilerCheckBox";

interface MOCK_USER_REVIEW_DATA {
  content: string;
  isSpoiler: boolean;
  character: boolean;
  art: boolean;
  story: boolean;
  voiceActing: boolean;
  sound: boolean;
}

interface ShortReviewModalProps {
  isVisible: boolean;
  onClose: () => void;
  onReview: () => void;
  userReviewData?: MOCK_USER_REVIEW_DATA;
}

export default function ShortReviewModal({
  isVisible,
  onClose,
  onReview,
  userReviewData,
  children,
}: PropsWithChildren<ShortReviewModalProps>) {
  const [form, setForm] = useState({
    content: userReviewData?.content ?? "",
    isSpoiler: userReviewData?.isSpoiler ?? false,
    character: userReviewData?.character ?? false,
    art: userReviewData?.art ?? false,
    story: userReviewData?.story ?? false,
    voiceActing: userReviewData?.voiceActing ?? false,
    sound: userReviewData?.sound ?? false,
  });

  const attractionPoints = [
    {
      name: "character",
      content: (
        <>
          개성 만점의 <strong style={{ marginLeft: 4 }}>캐릭터</strong>들
        </>
      ),
      isChecked: form.character,
    },
    {
      name: "art",
      content: (
        <>
          현실 찢고 들어간듯한/이쁜
          <strong style={{ marginLeft: 4 }}>그림체</strong>
        </>
      ),
      isChecked: form.art,
    },
    {
      name: "story",
      content: (
        <>
          딴 짓을 못하게 하는 엄청난
          <strong style={{ marginLeft: 4 }}>스토리</strong>
        </>
      ),
      isChecked: form.story,
    },
    {
      name: "voiceActing",
      content: (
        <>
          <strong>성우</strong>들의 미친 연기력
        </>
      ),
      isChecked: form.voiceActing,
    },
    {
      name: "sound",
      content: (
        <>
          가슴이 옹졸해지는 <strong style={{ marginLeft: 4 }}>음악</strong>
        </>
      ),
      isChecked: form.sound,
    },
  ];

  const handleTextInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  // TODO:
  // const handleReview = () => {
  //   // 유효성검사

  //   // 요청

  //   onReview();
  // };

  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <Modal.Content>
        <Title>한 줄 리뷰 모달</Title>
        {children}
        <ReviewContentSection>
          <label htmlFor="content">작품에 대한 의견을 남겨주세요</label>
          <Textarea
            name="content"
            placeholder="최대 100자 까지 입력 가능해요"
            onChange={handleTextInputChange}
            value={form.content}
          />
          <SpoilerCheckBox
            name="isSpoiler"
            checked={form.isSpoiler}
            onChange={handleCheckboxChange}
          />
        </ReviewContentSection>
        <AttractionPointSection>
          <label htmlFor="attraction-point">
            이 애니의 입덕포인트는 무엇인가요?
          </label>
          <p>
            입덕 포인트 선택 시 <span>포인트</span>가 쌓여요!
          </p>
          <AttractionPointList>
            {attractionPoints.map((point) => (
              <li key={point.name}>
                <AttractionPoint
                  name={point.name}
                  isChecked={point.isChecked}
                  onChagne={handleCheckboxChange}
                >
                  {point.content}
                </AttractionPoint>
              </li>
            ))}
          </AttractionPointList>
        </AttractionPointSection>
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
          취소
        </Button>
        <Button name="평가 완료" isBlock size="lg" onClick={onReview}>
          완료
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
