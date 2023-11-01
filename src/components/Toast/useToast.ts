import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import { ToastContext } from "@/contexts/ToastContext";

import { ToastProps } from ".";

export default function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error("can not found toast provider");

  /**
   * @example { message: "내용을 입력해 주세요!", icon: <Warning />, duration: 5 }
   * @required message: Toast에 보여줄 메시지
   * @optional icon: Toast 메시지와 함께 들어갈 아이콘
   * @optional closeIcon: 닫기 버튼 포함 여부
   * @optional buttonText: Text in Button
   * @optional onClick: Toast button 이벤트 핸들러 함수
   * @optional positon: Toast 위치 (default = bottom)
   * @optional duration: 유지 시간 (default = 2)
   *
   */
  const open = (toast: Omit<ToastProps, "id" | "onClose">) => {
    context.addToast(toast, uuidv4());
  };

  const remove = (id: string) => {
    context.removeToast(id);
  };

  return { open, remove };
}
