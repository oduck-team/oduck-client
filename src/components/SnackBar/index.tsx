import { forwardRef } from "react";

import { SnackBarContainer } from "./style";

interface SnackBarProps {
  text: string;
}

//TODO: SnackBar animation 변경
const SnackBar = forwardRef(
  ({ text }: SnackBarProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    // const [isPresent, safeToRemove] = usePresence();
    // useEffect(() => {
    //   !isPresent && setTimeout(safeToRemove, 2000);
    // }, [isPresent, safeToRemove]);

    return <SnackBarContainer ref={ref}>{text}</SnackBarContainer>;
  },
);

SnackBar.displayName = "SnackBar";

export default SnackBar;
