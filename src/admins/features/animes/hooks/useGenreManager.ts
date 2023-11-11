import { notifications } from "@mantine/notifications";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

import useAdminApi from "@/admins/hooks/useAdminApi";
// TODO: 예외 처리
export default function useGenreManager() {
  const { genreApi } = useAdminApi();
  const queryClient = useQueryClient();

  const {
    data: genres,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["genres"],
    queryFn: () => {
      try {
        return genreApi.getList();
      } catch (e) {
        return [];
      }
    },
  });

  const createGenre = useMutation({
    mutationFn: (name: string) => genreApi.create({ name }),
    onSuccess: () => {
      notifications.show({
        message: "장르가 등록되었어요",
        color: "green",
      });
      queryClient.invalidateQueries({
        queryKey: ["genres"],
      });
    },
  });

  const updateGenre = useMutation({
    mutationFn: ({ id, name }: { id: number; name: string }) =>
      genreApi.update(id, { name }),
    onSuccess: () => {
      notifications.show({
        message: "장르가 수정되었어요",
        color: "green",
      });
      queryClient.invalidateQueries({
        queryKey: ["genres"],
      });
    },
  });

  const deleteGenre = useMutation({
    mutationFn: (id: number) => genreApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["genres"],
      });
    },
    onError: (e) => {
      if (e instanceof AxiosError && e.response?.status === 404) {
        notifications.show({ message: "존재하지 않는 장르에요", color: "red" });
        queryClient.invalidateQueries({
          queryKey: ["genres"],
        });
      }
    },
  });

  return {
    genres,
    isLoading,
    isError,
    createGenre,
    updateGenre,
    deleteGenre,
  };
}
