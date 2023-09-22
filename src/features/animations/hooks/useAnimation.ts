import { useEffect } from "react";
import { useParams } from "react-router-dom";

import useFetch from "@/hooks/useFetch";

import { IAnimation } from "../types";

export function useAnimation() {
  const { id } = useParams();
  const { data, error, isLoading, fetcher } = useFetch<IAnimation>();

  useEffect(() => {
    if (isNaN(Number(id))) {
      return;
    }

    fetcher(`/animation/${id}`);
  }, [id, fetcher]);

  return {
    animation: data,
    isAnimationLoading: isLoading,
    animationError: error,
  };
}
