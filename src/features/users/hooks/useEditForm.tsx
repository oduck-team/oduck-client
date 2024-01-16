import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import useToast from "@/components/Toast/useToast";
import useAuth from "@/features/auth/hooks/useAuth";
import { useApi } from "@/hooks/useApi";
import { fileToWebPFile } from "@/libs/compressor";
import { useCommonToastError } from "@/libs/error";

export interface ProfileEditFormData {
  name: string;
  description: string;
}

interface UpdateProfileMutateVariables {
  backgroundImage: File | undefined;
  thumbnailImage: File | undefined;
}

export default function useEditForm(name: string, description: string) {
  const { profile } = useApi();
  const { fetchUser, user } = useAuth();
  const navigate = useNavigate();
  const [croppedArtImage, setCroppedArtImage] = useState<File | null>(null); // crop 배경 이미지
  const [croppedThumbnailImage, setCroppedThumbnailImage] =
    useState<File | null>(null); // crop 썸네일 이미지
  const [form, setForm] = useState<ProfileEditFormData>({
    name: name.length <= 10 ? name : "",
    description: description,
  });
  const [status, setStatus] = useState({ isWarn: false, message: "" });
  const [isFormChange, setIsFormChange] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // submit loading 상태

  const updateProfile = useMutation(
    ({ backgroundImage, thumbnailImage }: UpdateProfileMutateVariables) =>
      profile.updateProfile(form, backgroundImage, thumbnailImage),
  );
  const queryClient = useQueryClient();

  const toast = useToast();
  const { toastAuthError, toastDefaultError } = useCommonToastError();

  const previewArt = useMemo(
    () => croppedArtImage && URL.createObjectURL(croppedArtImage),
    [croppedArtImage],
  );

  const previewThumbNail = useMemo(
    () => croppedThumbnailImage && URL.createObjectURL(croppedThumbnailImage),
    [croppedThumbnailImage],
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "name" && value.length > 10) return;
    if (name === "description" && value.length > 100) return;

    setForm((prev) => ({ ...prev, [name]: value }));
    setIsFormChange(true);
  };

  const handleFormSumbit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormChange || !user) return;
    setIsLoading(true);

    if (!isNicknameRegexCheck(form.name)) {
      setStatus({
        isWarn: true,
        message:
          "한글, 영문, 숫자만 입력 가능합니다. 한글 또는 영문은 반드시 포함하여 2자~10자 닉네임을 설정해주세요.",
      });

      return;
    }

    let backgroundImage, thumbnailImage;
    if (croppedArtImage) {
      backgroundImage = await fileToWebPFile(croppedArtImage);
    }
    if (croppedThumbnailImage) {
      thumbnailImage = await fileToWebPFile(croppedThumbnailImage);
    }

    updateProfile.mutate(
      { backgroundImage, thumbnailImage },
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries(["profile", user?.name]);
          await fetchUser();
          queryClient.removeQueries(["profile", "edit", user?.name]);
          navigate("/profile");
        },
        onError: (error) => {
          if (error instanceof AxiosError && error.response?.status) {
            const status = error.response.status;
            switch (status) {
              case 401: // 인증 오류
                toastAuthError();
                break;
              case 400: // 정규식 검사 오류
                toast.error({ message: "사용할 수 없는 닉네임입니다." });
                break;
              case 409: // 닉네임 중복 오류
                toast.error({ message: "이미 사용중인 닉네임입니다." });
                break;
              default:
                toastDefaultError();
                break;
            }
          }
        },
        onSettled: () => setIsLoading(false),
      },
    );

    setStatus({ isWarn: false, message: "" });
  };

  /** 배경 이미지 및 썸네일 이미지 등록 시, 저장 버튼 활성화 */
  useEffect(() => {
    if (croppedArtImage || croppedThumbnailImage) setIsFormChange(true);
  }, [croppedArtImage, croppedThumbnailImage]);

  return {
    form,
    status,
    isFormChange,
    isLoading,
    previewArt,
    previewThumbNail,
    handleInputChange,
    handleFormSumbit,
    setCroppedArtImage,
    setCroppedThumbnailImage,
  };
}

function isNicknameRegexCheck(nickname: string) {
  const namePattern = /^(?=.*[a-zA-Z가-힣])[A-Za-z가-힣0-9]{2,10}$/;
  return namePattern.test(nickname);
}
