import { CheckCircle, WarningCircle } from "@phosphor-icons/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useToast from "@/components/Toast/useToast";
import useAuth from "@/features/auth/hooks/useAuth";
import { useApi } from "@/hooks/useApi";

export interface ProfileEditFormData {
  name: string;
  description: string;
}

export default function useEditForm(name: string, description: string) {
  const { profile } = useApi();
  const { fetchUser, user } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState<ProfileEditFormData>({
    name: name.length <= 10 ? name : "",
    description: description,
  });
  const [status, setStatus] = useState({ isWarn: false, message: "" });
  const [isFormChange, setIsFormChange] = useState(false);
  const updateProfile = useMutation(() => profile.updateProfile(form));
  const queryClient = useQueryClient();
  const toast = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "name" && value.length > 10) {
      setForm((prev) => ({ ...prev, name: prev.name.substring(0, 5) }));
      return;
    }
    if (name === "description" && value.length > 100) return;

    setForm((prev) => ({ ...prev, [name]: value }));
    setIsFormChange(true);
  };

  const handleFormSumbit = async (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile.mutate(undefined, {
      onSuccess: async () => {
        await queryClient.invalidateQueries(["profile", user.name]);
        await fetchUser();
        navigate("/profile");
      },
      onError: (error) => {
        if (error instanceof AxiosError && error.response?.status) {
          const status = error.response.status;
          switch (status) {
            case 401: // 인증 오류
              toast.open({
                message: "로그인 시간이 만료되었어요.\n다시 로그인해 주세요.",
                icon: <CheckCircle weight="fill" />,
                iconColor: "warn",
                buttonText: "로그인",
                onClickButton: () => navigate("/login"),
                position: "top",
              });
              break;
            case 400: // 기존 닉네임과 동일
            case 409: // 정규식 검사 오류
              toast.open({
                message: "사용할 수 없는 닉네임입니다.",
                icon: <WarningCircle weight="fill" />,
                iconColor: "warn",
                position: "top",
              });
              break;
            default:
              toast.open({
                message: "오류가 발생했어요. 잠시 후 다시 시도해 주세요.",
                icon: <WarningCircle weight="fill" />,
                iconColor: "warn",
                position: "top",
              });
              break;
          }
        }
      },
    });

    if (!isNicknameRegexCheck(form.name)) {
      setStatus({
        isWarn: true,
        message:
          "한글, 영문, 숫자만 입력 가능합니다. 한글 또는 영문은 반드시 포함하여 2자~10자 닉네임을 설정해주세요.",
      });
      return;
    }

    setStatus({ isWarn: false, message: "" });
  };

  return { form, status, isFormChange, handleInputChange, handleFormSumbit };
}

function isNicknameRegexCheck(nickname: string) {
  const namePattern = /^(?=.*[a-zA-Z가-힣])[A-Za-z가-힣0-9]{2,10}$/;
  return namePattern.test(nickname);
}
