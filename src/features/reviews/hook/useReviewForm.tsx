import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import useToast from "@/components/Toast/useToast";
import useAuth from "@/features/auth/hooks/useAuth";
import useDebounce from "@/hooks/useDebounce";

import { AttractionType } from "../api/review";
import { UserReview } from "../components/ReviewRating/ShortReviewModal";

import useAttractionPoint from "./useAttractionPoint";
import useReview from "./useReview";

type ReviewForm = Pick<UserReview, "content" | "isSpoiler"> & AttractionPoint;

const DEBOUNCE_DELAY = 200;

export default function useReviewForm(
  onReview: () => void,
  userReviewData?: UserReview,
) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const animeId = userReviewData?.animeId ?? Number(pathname.split("/")[2]);

  const { user } = useAuth();
  const { addReview, updateReview } = useReview(animeId, onReview);

  const { userAttraction, addAttraction, status } = useAttractionPoint(animeId);

  const toast = useToast();

  const [form, setForm] = useState<ReviewForm>({
    content: userReviewData?.content ?? "",
    isSpoiler: userReviewData?.isSpoiler ?? false,
    character: userAttraction?.character ?? false,
    drawing: userAttraction?.drawing ?? false,
    story: userAttraction?.story ?? false,
    voiceActor: userAttraction?.voiceActor ?? false,
    music: userAttraction?.music ?? false,
  });

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      character: userAttraction?.character ?? false,
      drawing: userAttraction?.drawing ?? false,
      story: userAttraction?.story ?? false,
      voiceActor: userAttraction?.voiceActor ?? false,
      music: userAttraction?.music ?? false,
    }));
  }, [userAttraction]);

  const [error, setError] = useState(false);

  const handleTextInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "content" && value.length > 100) return;
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

  const handleReviewSubmit = useDebounce(() => {
    // 유효성 검사
    setError(false);
    if (form.content.trim().length < 10) {
      setError(true);
      return;
    }

    // 체크한 입덕 포인트
    const selectedAttraction = Object.keys(form)
      .filter(
        (key) =>
          form[key as keyof ReviewForm] === true &&
          !["content, isSpoiler"].includes(key),
      )
      .map((key) =>
        key === "voiceActor" ? "VOICE_ACTOR" : key.toUpperCase(),
      ) as AttractionType[];

    console.log("입덕 포인트: ", selectedAttraction);

    // 입덕 포인트 추가: 체크된 입덕 포인트가 있는 경우에만 요청
    if (selectedAttraction.length !== 0 && !status?.isAttractionPoint) {
      addAttraction.mutate(selectedAttraction);
    }

    // TODO: 입덕 포인트 수정

    // 리뷰 수정
    if (userReviewData) {
      // 내용에 변화가 있을 경우에만 요청
      if (
        userReviewData.content !== form.content ||
        userReviewData.isSpoiler !== form.isSpoiler
      )
        updateReview.mutate(
          {
            reviewId: userReviewData.reviewId,
            review: {
              name: user?.name ?? "",
              animeId,
              hasSpoiler: form.isSpoiler,
              content: form.content,
            },
          },
          {
            onSuccess: () => {
              toast.success({
                message: "리뷰가 수정되었어요.",
              });
            },
          },
        );
      // 모달 닫기
      else onReview();
    } else {
      // 리뷰 추가
      addReview.mutate(
        {
          name: user?.name ?? "",
          animeId,
          hasSpoiler: form.isSpoiler,
          content: form.content,
        },
        {
          onSuccess: () => {
            toast.success({
              message: "리뷰가 등록되었어요.",
              buttonText: "내 모든 리뷰 보러 가기",
              onClickButton: () => navigate("/profile"),
            });
          },
        },
      );
    }
  }, DEBOUNCE_DELAY);

  return {
    form,
    error,
    handleTextInputChange,
    handleCheckboxChange,
    handleReviewSubmit,
  };
}
