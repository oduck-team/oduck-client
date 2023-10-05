import { forwardRef } from "react";

import { SnackBarContainer } from "./style";

interface SnackBarProps {
  text: string;
}

const SnackBar = forwardRef(
  ({ text }: SnackBarProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    return <SnackBarContainer ref={ref}>{text}</SnackBarContainer>;
  },
);

SnackBar.displayName = "SnackBar";

export default SnackBar;
