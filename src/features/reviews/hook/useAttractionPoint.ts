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

  // 입덕 포인트 추가/수정
  const attractionMutation = useMutation({
    mutationFn: (attractions: AttractionType[]) => {
      if (!status?.isAttractionPoint)
        return reviewApi.addAttractionPoint(animeId, attractions);
      return reviewApi.updateAttractionPoint(animeId, attractions);
    },
    onSuccess: () => {
      // 사용자 입덕 포인트, 입덕 포인트 존재 여부, 입덕 포인트 통계 무효화
      queryClient.invalidateQueries(["attraction", animeId]);
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

  return { userAttraction, status, attractionMutation };
}
