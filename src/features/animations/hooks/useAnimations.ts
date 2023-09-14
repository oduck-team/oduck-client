import { useEffect } from "react";

import useFetch from "@/hooks/useFetch";

import { IAnimation } from "../types";

export function useAnimations() {
  const { data, error, isLoading, fetcher } = useFetch<IAnimation[]>();

  useEffect(() => {
    fetcher(`/animation`);
  }, [fetcher]);

  return {
    animations: data,
    animationsError: error,
    isAnimationsLoading: isLoading,
  };
}
