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
  snackBarContainerReducer,
} from "./SnackBarContainerReducer";

type SnackBarDispatch = Dispatch<Action>;

export type PortalID = string;
interface State {
  /** snackBar portal unique id */
  id?: PortalID;
  /** snackBar list */
  snackBars: SnackBar[];
  /** snackBar on, off 디스패치 */
  dispatch: SnackBarDispatch;
}

interface SnackBarContextProviderProps {
  /** snackBar portal unique id */
  id?: PortalID;
  option?: Omit<SnackBarPortalProps, "snackBars">;
}

export const SnackBarContext = createContext<State | null>(null);

export function SnackBarContextProvider({
  id,
  option,
  children,
}: StrictPropsWithChildren<SnackBarContextProviderProps>) {
  const [snackBars, dispatch] = useReducer(
    snackBarContainerReducer,
    initialState,
  );

  const off = (id: string) =>
    dispatch({ type: ActionType.REMOVE, payload: { id } });

  return (
    <SnackBarContext.Provider value={{ id, snackBars, dispatch }}>
      {children}
      <SnackBarPortal
        portalId={id}
        snackBars={snackBars}
        off={off}
        {...option}
      />
    </SnackBarContext.Provider>
  );
}
