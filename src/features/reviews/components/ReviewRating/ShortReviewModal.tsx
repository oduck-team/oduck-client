import { PropsWithChildren } from "react";

import Modal from "@/components/Modal";
import Textarea from "@/components/TextArea";

import useReviewForm from "../../hook/useReviewForm";
import AttractionPoint from "../AttractionPoint";

import {
  Title,
  AttractionPointSection,
  AttractionPointList,
  Button,
  ReviewContentSection,
} from "./ShortReviewModal.style";
import SpoilerCheckBox from "./SpoilerCheckBox";

export interface MOCK_USER_REVIEW_DATA {
  reviewId: number;
  animeId: number;
  content: string;
  isSpoiler: boolean;
  character: boolean;
  art: boolean;
  story: boolean;
  voiceActing: boolean;
  sound: boolean;
}

interface ShortReviewModalProps {
  onClose: () => void;
  onReview: () => void;
  showBackdrop?: boolean;
  userReviewData?: MOCK_USER_REVIEW_DATA;
}

export default function ShortReviewModal({
  onClose,
  onReview,
  userReviewData,
  showBackdrop = true,
  children,
}: PropsWithChildren<ShortReviewModalProps>) {
  const {
    form,
    error,
    handleTextInputChange,
    handleCheckboxChange,
    handleReviewSubmit,
  } = useReviewForm(onReview, userReviewData);

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

  return (
    <Modal onClose={onClose} showBackdrop={showBackdrop}>
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
            warn={error}
            message="최소 10자 이상 입력해 주세요."
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
                  onChange={handleCheckboxChange}
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
        <Button name="평가 완료" isBlock size="lg" onClick={handleReviewSubmit}>
          완료
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
