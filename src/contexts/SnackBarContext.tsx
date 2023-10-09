import { Dispatch, createContext, useReducer } from "react";

import SnackBarPortal, {
  SnackBarPortalProps,
} from "@/components/SnackBar/SnackBarPortal";
import { StrictPropsWithChildren } from "@/types";

import {
  Action,
  ActionType,
  SnackBar,
  initialState,
  snackBarReducer,
} from "../components/SnackBar/snackBarReducer";

type SnackBarDispatch = Dispatch<Action>;

export type PortalID = string;
interface State {
  /** snackBar portal unique id */
  id?: PortalID;
  /** snackBar list */
  snackBars: SnackBar[];
  /** snackBar 추가, 제거 디스패치 */
  dispatch: SnackBarDispatch;
}

interface SnackBarContextProviderProps {
  /** snackBar portal unique id */
  id?: PortalID;
  /** portal option */
  option?: Omit<SnackBarPortalProps, "snackBars">;
}

export const SnackBarContext = createContext<State | null>(null);

/**
 * @desc: position default: "bottom"
 * @desc: duration default: 2
 * @desc: option을 재정의 할 수 있습니다.
 * @example option={{ position: "top", duration: 10, zIndex: 9999 }}
 */
export function SnackBarContextProvider({
  id,
  option,
  children,
}: StrictPropsWithChildren<SnackBarContextProviderProps>) {
  const [snackBars, dispatch] = useReducer(snackBarReducer, initialState);

  const handleCloseSnackBar = (id: string) =>
    dispatch({ type: ActionType.REMOVE, payload: { id } });

  return (
    <SnackBarContext.Provider value={{ id, snackBars, dispatch }}>
      {children}
      <SnackBarPortal
        portalId={id}
        snackBars={snackBars}
        onCloseSnackBar={handleCloseSnackBar}
        {...option}
      />
    </SnackBarContext.Provider>
  );
}
