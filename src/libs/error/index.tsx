import { useNavigate } from "react-router-dom";

import useToast from "@/components/Toast/useToast";

/** @description 베이스 에러 클래스 */
export class BaseError extends Error {
  status: number | undefined;

  constructor(name: string, message: string, status?: number) {
    super(message);
    this.name = name;
    this.status = status;
  }
}

/** @description 500번대 이상의 서버 에러 */
export class ServerError extends BaseError {
  constructor(message: string, status?: number) {
    super("ServerError", message, status);
  }
}

/** @description 유효성 검사 에러 */
interface FieldError {
  field: string; // 필드명
  rejectedValue: string; // 요청 거부된 원본 값
  reason: string; // 이유
}

/** @description 400번대 서버 api 에러 */
export class ApiError extends BaseError {
  fieldErrors?: FieldError[];

  constructor(message: string, status?: number, fieldErrors = []) {
    super("ApiError", message, status);
    this.fieldErrors = fieldErrors;
  }
}

/** 공용 toast error */
export function useCommonToastError() {
  const toast = useToast();
  const navigate = useNavigate();

  const toastAuthError = () =>
    toast.error({
      message: "로그인 시간이 만료되었어요.\n다시 로그인해 주세요.",
      buttonText: "로그인",
      onClickButton: () => navigate("/login"),
    });

  const toastDefaultError = () => {
    toast.error({
      message: "오류가 발생했어요. 잠시 후 다시 시도해 주세요.",
    });
  };

  return { toastAuthError, toastDefaultError };
}
