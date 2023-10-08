import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import { ActionType } from "@/components/SnackBar/snackBarReducer";
import { SnackBarContext } from "@/contexts/SnackBarContext";

import { SnackBarProps } from ".";

/**
 * @example
 * const snackBar = useSnackBar();
 * snackBar?.open({ message: "신고가 접수되었습니다." });
 */
export default function useSnackBar() {
  const context = useContext(SnackBarContext);

  if (!context) return null;
  return {
    /**
     * @desc duration을 재정의 할 수 있습니다.
     * @example snackBar?.open({ message: "신고가 접수되었습니다.", duration: 10 });
     */
    open: (options: Omit<SnackBarProps, "id" | "position">) => {
      context.dispatch({
        type: ActionType.ADD,
        payload: { options: { ...options, id: uuidv4() } },
      });
    },
    close: (id: string) => {
      context.dispatch({
        type: ActionType.REMOVE,
        payload: { id },
      });
    },
    length: context.snackBars.length,
    list: context.snackBars,
  };
}
