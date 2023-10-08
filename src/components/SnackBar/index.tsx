import { useMemo, useState } from "react";

import { SnackBarContainer } from "./style";
import useInterval from "./useInterval";

export interface SnackbarPublicProps {
  /**
   * 0: infinity
   * 1 ~ : for the given time, snackbar appears and disappears
   * */
  duration?: number;
}

export interface SnackBarProps extends SnackbarPublicProps {
  id: string;
  message: string;
  onClose?: (id: string) => void;
}

export default function SnackBar({
  id,
  message,
  duration = 2,
  onClose,
}: SnackBarProps) {
  const [remainSeconds, setRemainSeconds] = useState<number>(duration * 1000);
  const onCloseSnackbar = () => onClose?.(id);

  const interval = useMemo(
    () => (remainSeconds >= 0 ? 100 : null),
    [remainSeconds],
  );
  useInterval(() => {
    setRemainSeconds(remainSeconds - 100);
    if (remainSeconds === 0) {
      onCloseSnackbar();
    }
  }, interval);

  return (
    <SnackBarContainer onClick={onCloseSnackbar}>{message}</SnackBarContainer>
  );
}
