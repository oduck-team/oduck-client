import { Variants } from "framer-motion";

import useScrollLock from "@/hooks/useScrollLock";

import { BackdropContainer } from "./style";

const variants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export interface BackdropProps {
  isVisible?: boolean;
  className?: string;
  onClick: () => void;
}

/**
 * @desc 1. < AnimatePortal > 컴포넌트와 함께 사용
 * @desc 2. < AnimatePresence > + < Portal > 컴포넌트와 함께 사용
 * @desc 3. < AnimateBackdropPoral > 컴포넌트와 함께 사용
 * @desc Backdrop 컴포넌트가 동시에 mount, unmoutn되면,
 * < AnimatePresence >로 인해 useScrollLock이 제대로 동작하지 않을 수 있습니다.
 * < ProfileSetupButton > 컴포넌트 및 하위 두 모달 컴포넌트를 참고하여 하나의 Backdrop만 사용해주세요.
 * */
export default function Backdrop({
  isVisible = true,
  className = "",
  onClick,
}: BackdropProps) {
  useScrollLock(isVisible);

  return (
    <BackdropContainer
      aria-hidden
      isVisible={isVisible}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ duration: 0.15 }}
      className={className}
      onClick={onClick}
    />
  );
}
