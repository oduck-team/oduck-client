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

  const { userAttraction, attractionMutation } = useAttractionPoint(animeId);

  const toast = useToast();

  const [form, setForm] = useState<ReviewForm>({
    content: userReviewData?.content ?? "",
    isSpoiler: userReviewData?.isSpoiler ?? false,
    drawing: userAttraction?.drawing ?? false,
    story: userAttraction?.story ?? false,
    music: userAttraction?.music ?? false,
    character: userAttraction?.character ?? false,
    voiceActor: userAttraction?.voiceActor ?? false,
  });

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      drawing: userAttraction?.drawing ?? false,
      story: userAttraction?.story ?? false,
      music: userAttraction?.music ?? false,
      character: userAttraction?.character ?? false,
      voiceActor: userAttraction?.voiceActor ?? false,
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

    const { content, isSpoiler, ...attraction } = form;
    const isReviewChanged = !userReviewData
      ? true
      : userReviewData.content !== content ||
        userReviewData.isSpoiler !== isSpoiler;

    // 체크한 입덕포인트
    const selectedAttraction = Object.keys(attraction)
      .filter((key) => attraction[key as keyof AttractionPoint] === true)
      .map((key) =>
        key === "voiceActor" ? "VOICE_ACTOR" : key.toUpperCase(),
      ) as AttractionType[];

    const isAttractionChanged = !userAttraction
      ? true
      : Object.entries(userAttraction).toString() !==
        Object.entries({ ...attraction }).toString();

    // 입덕포인트 추가/수정: 변경된 값이 있는 경우에만 수행
    if (selectedAttraction.length !== 0 && isAttractionChanged)
      attractionMutation.mutate(selectedAttraction, {
        onSuccess: () => {
          // 리뷰 내용을 제외한 입덕포인트만 변경된 경우 toast 생성
          if (!isReviewChanged)
            toast.success({
              message: "입덕포인트가 수정되었어요.",
            });
        },
      });

    const review = {
      name: user?.name ?? "",
      animeId,
      hasSpoiler: isSpoiler,
      content: content,
    };

    // 리뷰 수정
    if (userReviewData) {
      // 내용에 변화가 있을 경우에만 요청
      if (isReviewChanged)
        updateReview.mutate(
          {
            reviewId: userReviewData.reviewId,
            review,
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
      addReview.mutate(review, {
        onSuccess: () => {
          toast.success({
            message: "리뷰가 등록되었어요.",
            buttonText: "내 모든 리뷰 보러 가기",
            onClickButton: () => navigate("/profile"),
          });
        },
      });
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
