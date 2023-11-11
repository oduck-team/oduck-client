import { notifications } from "@mantine/notifications";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

import useAdminApi from "@/admins/hooks/useAdminApi";
// TODO: 예외 처리
export default function useSeriesManager() {
  const { seriesApi } = useAdminApi();
  const queryClient = useQueryClient();

  const {
    data: series,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["series"],
    queryFn: () => {
      try {
        return seriesApi.getList();
      } catch (e) {
        return [];
      }
    },
  });

  const createSeries = useMutation({
    mutationFn: (title: string) => seriesApi.create({ title }),
    onSuccess: () => {
      notifications.show({
        message: "시리즈가 등록되었어요",
        color: "green",
      });
      queryClient.invalidateQueries({
        queryKey: ["series"],
      });
    },
  });

  const updateSeries = useMutation({
    mutationFn: ({ id, title }: { id: number; title: string }) =>
      seriesApi.update(id, { title }),
    onSuccess: () => {
      notifications.show({
        message: "시리즈가 수정되었어요",
        color: "green",
      });
      queryClient.invalidateQueries({
        queryKey: ["series"],
      });
    },
  });

  const deleteSeries = useMutation({
    mutationFn: (id: number) => seriesApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["series"],
      });
    },
    onError: (e) => {
      if (e instanceof AxiosError && e.response?.status === 404) {
        notifications.show({
          message: "존재하지 않는 시리즈에요",
          color: "red",
        });
        queryClient.invalidateQueries({
          queryKey: ["series"],
        });
      }
    },
  });

  return {
    series,
    isLoading,
    isError,
    createSeries,
    updateSeries,
    deleteSeries,
  };
}
