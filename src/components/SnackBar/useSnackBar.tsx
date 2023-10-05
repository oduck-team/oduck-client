import { useRef } from "react";

type Position = "bottom" | "top";

export default function useSnackBar() {
  const snackBarRef = useRef<HTMLDivElement>(null);
  const showSnackBar = (position: Position = "bottom") =>
    snackBarRef.current?.animate(keyframes(position), options);

  return {
    snackBarRef,
    showSnackBar,
  };
}

const keyframes = (position: Position) => [
  {
    [position]: `${position === "bottom" ? "66px" : "16px"}`,
    opacity: 0,
    visibility: "visible",
    offset: 0,
  },
  {
    [position]: `${position === "bottom" ? "74px" : "24px"}`,
    opacity: 1,
    offset: 0.2,
  },
  {
    [position]: `${position === "bottom" ? "74px" : "24px"}`,
    opacity: 1,
    offset: 0.8,
  },
  {
    [position]: `${position === "bottom" ? "66px" : "16px"}`,
    opacity: 0,
    offset: 1,
  },
];

const options = {
  duration: 2000,
  easing: "linear",
};
