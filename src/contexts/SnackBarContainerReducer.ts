type SnackBarItemID = string;

export interface SnackBar {
  id: SnackBarItemID;
  message: string;
}

export const enum ActionType {
  ADD,
  REMOVE,
}

export type Action =
  | { type: ActionType.ADD; payload: { options: SnackBar } }
  | { type: ActionType.REMOVE; payload: { id: SnackBarItemID } };

export const initialState: SnackBar[] = [];

export function snackBarContainerReducer(
  state: SnackBar[],
  action: Action,
): SnackBar[] {
  switch (action.type) {
    case ActionType.ADD:
      return [...state, action.payload.options];
    case ActionType.REMOVE:
      return state.filter((snackBar) => snackBar.id !== action.payload.id);
    default:
      return state;
  }
}
