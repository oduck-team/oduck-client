import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import useToast from "@/components/Toast/useToast";
import useAuth from "@/features/auth/hooks/useAuth";

import { MOCK_USER_REVIEW_DATA } from "../components/ReviewRating/ShortReviewModal";

import useReview from "./useReview";

export default function useReviewForm(
  onReview: () => void,
  userReviewData?: MOCK_USER_REVIEW_DATA,
) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const animeId = userReviewData?.animeId ?? Number(pathname.split("/")[2]);

  const { user } = useAuth();
  const { addReview, updateReview } = useReview(animeId, onReview);

  const toast = useToast();

  const [form, setForm] = useState({
    content: userReviewData?.content ?? "",
    isSpoiler: userReviewData?.isSpoiler ?? false,
    character: userReviewData?.character ?? false,
    art: userReviewData?.art ?? false,
    story: userReviewData?.story ?? false,
    voiceActing: userReviewData?.voiceActing ?? false,
    sound: userReviewData?.sound ?? false,
  });

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

  const handleReviewSubmit = () => {
    // 유효성 검사
    setError(false);
    if (form.content.trim().length < 10) {
      setError(true);
      return;
    }

    // console.log(form);
    console.log({
      name: user?.name,
      animeId,
      isSpoiler: form.isSpoiler,
      content: form.content,
    });

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
  };

  return {
    form,
    error,
    handleTextInputChange,
    handleCheckboxChange,
    handleReviewSubmit,
  };
}
