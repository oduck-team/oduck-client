import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getAnimation } from "../apis/getAnimation";
import { IAnimation } from "../types";

export function useAnimation() {
  const [animation, setAnimation] = useState<IAnimation | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { id } = useParams();

  const fetchAnimation = async (id: number) => {
    try {
      setLoading(true);
      const animation = await getAnimation(id);
      setAnimation(animation);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const animationId = Number(id);
    if (isNaN(animationId)) {
      setError(new Error("invalid animation id")); // TODO: 상수 처리
      return;
    }
    /**
     * StrictMode에서 useParams에서 꺼내온 id가 각각 다른 값으로 인식되어 api 요청이 4번 될 수 있음
     */
    fetchAnimation(animationId);
  }, [id]);

  return { animation, isAnimationLoading: loading, animationError: error };
}
