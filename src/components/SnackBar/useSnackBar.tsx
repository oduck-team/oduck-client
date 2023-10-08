import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import { ActionType } from "@/contexts/SnackBarContainerReducer";
import { SnackBarContext } from "@/contexts/SnackBarContext";

import { SnackBarProps } from ".";

export default function useSnackBar() {
  const context = useContext(SnackBarContext);

  if (!context) return null;
  return {
    on: (options: Omit<SnackBarProps, "id" | "position">) => {
      context.dispatch({
        type: ActionType.ADD,
        payload: { options: { ...options, id: uuidv4() } },
      });
    },
    off: (id: string) => {
      context.dispatch({
        type: ActionType.REMOVE,
        payload: { id },
      });
    },
    length: context.snackBars.length,
    list: context.snackBars,
  };
}
