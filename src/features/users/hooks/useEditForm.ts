import { useState } from "react";

import { isNicknameRegxCheck } from "@/utils/common";

const NICKNAME_PATTERN_MESSAGE =
  "한글, 영문, 숫자만 입력 가능합니다. 한글 또는 영문은 반드시 포함하여 2자~10자 닉네임을 설정해주세요.";

export default function useEditForm() {
  const [input, setInput] = useState({ name: "", description: "" });
  const [status, setStatus] = useState({ isWarn: false, message: "" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "name" && value.length > 10) return;
    if (name === "description" && value.length > 100) return;

    setInput((prev) => ({ ...prev, [name]: value }));
  };

  //TODO: 닉네임 중복 검사 추가
  const handleFormSumbit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isNicknameRegxCheck(input.name)) {
      setStatus({ isWarn: false, message: "" });
    } else {
      setStatus({ isWarn: true, message: NICKNAME_PATTERN_MESSAGE });
      return;
    }
  };

  return { input, status, handleInputChange, handleFormSumbit };
}
