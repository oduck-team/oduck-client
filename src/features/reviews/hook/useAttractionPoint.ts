import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

import useAuth from "@/features/auth/hooks/useAuth";
import { useApi } from "@/hooks/useApi";
import { useCommonToastError } from "@/libs/error";

import { AttractionType } from "../api/review";

export default function useAttractionPoint(animeId: number) {
  const { reviewApi } = useApi();
  const { user } = useAuth();
  const { toastAuthError, toastDefaultError } = useCommonToastError();
  const queryClient = useQueryClient();

  // 사용자가 남긴 입덕 포인트 조회
  const { data: userAttraction } = useQuery({
    queryKey: ["attraction", animeId, user?.name],
    queryFn: () => reviewApi.getUserAttractionPoint(animeId, user?.name ?? ""),
    enabled: Boolean(user?.name),
  });

  // 사용자의 입덕 포인트 존재 여부 조회
  const { data: status } = useQuery({
    queryKey: ["attraction", animeId, "status", user?.memberId],
    queryFn: () => reviewApi.getUserAttractionPointStatus(animeId),
  });

  // 입덕 포인트 추가
  const addAttraction = useMutation({
    mutationFn: (attractions: AttractionType[]) =>
      reviewApi.addAttractionPoint(animeId, attractions),
    onSuccess: () => {
      queryClient.invalidateQueries(["attraction", animeId]);
      // TODO: 애니 입덕 포인트 통계 query 무효화
    },
    onError: (error) => {
      if (error instanceof AxiosError && error.response?.status) {
        const status = error.response.status;
        switch (status) {
          case 401:
            toastAuthError();
            break;
          default:
            toastDefaultError();
            break;
        }
      }
    },
  });

  return { userAttraction, status, addAttraction };
}
