import { useParams } from "react-router-dom";

import useFetch from "@/hooks/useFetch";

import { IAnimation } from "../types";

export function useAnimation() {
  const { id } = useParams();
  const { data, error, isLoading } = useFetch<IAnimation>(`/animation/${id}`);

  if (isNaN(Number(id))) {
    return {
      animation: undefined,
      isAnimationLoading: isLoading,
      animationError: new Error("Not Found"),
    };
  }

  return {
    animation: data,
    isAnimationLoading: isLoading,
    animationError: error,
  };
}
