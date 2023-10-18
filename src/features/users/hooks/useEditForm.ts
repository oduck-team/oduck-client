import { useState } from "react";

export default function useEditForm(name: string, description: string) {
  const [form, setForm] = useState({ name: name, description: description });
  const [status, setStatus] = useState({ isWarn: false, message: "" });
  const [isFormChange, setIsFormChange] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "name" && value.length > 10) return;
    if (name === "description" && value.length > 100) return;

    setForm((prev) => ({ ...prev, [name]: value }));
    setIsFormChange(true);
  };

  //TODO: 닉네임 중복 검사 추가
  const handleFormSumbit = (e: React.FormEvent) => {
    e.preventDefault();

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
