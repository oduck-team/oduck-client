import { Variants } from "framer-motion";

import { Container } from "./style";

const variants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export interface BackdropProps {
  isVisible?: boolean;
  className?: string;
  onClick: () => void;
}

export default function Backdrop({
  isVisible = true,
  className = "",
  onClick,
}: BackdropProps) {
  return (
    <Container
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
