import { Variants } from "framer-motion";

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

/** AnimatePortal 컴포넌트로 감싸서 사용 */
export default function Backdrop({
  isVisible = true,
  className = "",
  onClick,
}: BackdropProps) {
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
