import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import { ActionType } from "@/components/SnackBar/snackBarReducer";
import { SnackBarContext } from "@/contexts/SnackBarContext";

import { SnackBarProps } from ".";

export default function useSnackBar() {
  const context = useContext(SnackBarContext);

  if (!context) return null;
  return {
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
