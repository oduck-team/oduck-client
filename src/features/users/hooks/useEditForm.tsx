import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useEffect, useMemo, useState } from "react";

import useToast from "@/components/Toast/useToast";
import useAuth from "@/features/auth/hooks/useAuth";
import { useApi } from "@/hooks/useApi";
import { fileToWebPFile } from "@/libs/compressor";
import { useCommonToastError } from "@/libs/error";

export interface ProfileEditFormData {
  name: string;
  description: string;
  backgroundImage?: string;
  thumbnail?: string;
}

interface UpdateProfileMutateVariables {
  backgroundImagePath: string | undefined;
  thumbnailImagePath: string | undefined;
}

export default function useEditForm(name: string, description: string) {
  const { profile, fileApi } = useApi();
  const { fetchUser, user } = useAuth();
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
    ({
      backgroundImagePath,
      thumbnailImagePath,
    }: UpdateProfileMutateVariables) =>
      profile.updateProfile(form, backgroundImagePath, thumbnailImagePath),
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

    if (name === "name" && status.isWarn) {
      if (isNicknameRegexCheck(value)) {
        setStatus({ isWarn: false, message: "" });
      }
    }

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
      setIsLoading(false);

      return;
    }

    let backgroundImagePath, thumbnailImagePath;
    if (croppedArtImage) {
      const webPFile = await fileToWebPFile(croppedArtImage);

      backgroundImagePath = await fileApi.uploadImage({
        path: `user/${user.memberId}`,
        filename: "backgroundImage",
        file: webPFile,
      });
    }

    if (croppedThumbnailImage) {
      const webPFile = await fileToWebPFile(croppedThumbnailImage);

      thumbnailImagePath = await fileApi.uploadImage({
        path: `user/${user.memberId}`,
        filename: "thumbnailImage",
        file: webPFile,
      });
    }

    updateProfile.mutate(
      { backgroundImagePath, thumbnailImagePath },
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries(["profile", user?.name]);
          await fetchUser();
          queryClient.removeQueries(["profile", "edit", user?.name]);

          const path =
            process.env.NODE_ENV === "production"
              ? "https://oduck.io/profile"
              : "http://localhost:5173/profile";

          window.location.href = path;
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
