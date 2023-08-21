import { Variants } from "framer-motion";

import { StrictPropsWithChildren } from "@/types";

import { Container } from "./style";

const variants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export interface BackdropProps {
  readonly isVisible?: boolean;
  readonly className?: string;
  readonly onClick: () => void;
}

export default function Backdrop({
  isVisible = true,
  className = "",
  onClick,
  children,
}: StrictPropsWithChildren<BackdropProps>) {
  return (
    <Container
      isVisible={isVisible}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ duration: 0.15 }}
      className={className}
      onClick={onClick}
    >
      {children}
    </Container>
  );
}
