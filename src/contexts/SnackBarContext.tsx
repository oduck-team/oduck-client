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
  /** snackBar on, off 디스패치 */
  dispatch: SnackBarDispatch;
}

interface SnackBarContextProviderProps {
  /** snackBar portal unique id */
  id?: PortalID;
  /** portal option */
  option?: Omit<SnackBarPortalProps, "snackBars">;
}

export const SnackBarContext = createContext<State | null>(null);

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
