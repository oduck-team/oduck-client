import { useState, useEffect, useRef } from "react";

import useDebounce from "@/hooks/useDebounce";

export default function useReadMoreText() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [isShowReadMoreButton, setIsShowReadMoreButton] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleReadMoreButtonToggle = () => setIsOpen((prev) => !prev);

  /** 더보기/접기 버튼 렌더링 결정 */
  const checkReadMoreButtonAvailability = useDebounce(() => {
    if (textRef.current) {
      // text element의 ellipsis class 여부 저장
      const hadEllipsisClass = textRef.current.classList.contains("ellipsis");

      // 처음 저장한 text element에 ellipsis 적용되어 있지 않다면 (화면에 접기 버튼 렌더링)
      // text element에 ellipsis class 추가
      if (!hadEllipsisClass) {
        textRef.current.classList.add("ellipsis");
      }

      // 더보기/접기 버튼 렌더링 결정
      setIsShowReadMoreButton(
        textRef.current.clientHeight !== textRef.current.scrollHeight,
      );

      // 이전에 추가한 ellipsis class 제거하여 원래대로 돌아감
      if (!hadEllipsisClass) {
        textRef.current.classList.remove("ellipsis");
      }
    }
  }, 100);

  useEffect(() => {
    checkReadMoreButtonAvailability();
    window.addEventListener("resize", checkReadMoreButtonAvailability);

    return () => {
      window.removeEventListener("resize", checkReadMoreButtonAvailability);
    };
  }, [checkReadMoreButtonAvailability]);

  return {
    textRef,
    isOpen,
    isShowReadMoreButton,
    handleReadMoreButtonToggle,
  };
}
