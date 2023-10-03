import { useState } from "react";

export default function useSnackBar() {
  const [isSnackBarOpen, setIsSnackBarOpen] = useState(false);
  const openSnackBar = () => setIsSnackBarOpen(true);
  const removeSnackBarAfter = (ms: number) =>
    setTimeout(() => setIsSnackBarOpen(false), ms);

  return { isSnackBarOpen, openSnackBar, removeSnackBarAfter };
}
