import { notifications } from "@mantine/notifications";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

import useAdminApi from "@/admins/hooks/useAdminApi";
// TODO: 예외 처리
export default function useOriginalAuthorManager() {
  const { originalAuthorApi } = useAdminApi();
  const queryClient = useQueryClient();

  const {
    data: originalAuthors,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["originalAuthors"],
    queryFn: () => {
      try {
        return originalAuthorApi.getList();
      } catch (e) {
        return [];
      }
    },
  });

  const createOriginalAuthor = useMutation({
    mutationFn: (name: string) => originalAuthorApi.create({ name }),
    onSuccess: () => {
      notifications.show({
        message: "원작자가 등록되었어요",
        color: "green",
      });
      queryClient.invalidateQueries({
        queryKey: ["originalAuthors"],
      });
    },
  });

  const updateOriginalAuthor = useMutation({
    mutationFn: ({ id, name }: { id: number; name: string }) =>
      originalAuthorApi.update(id, { name }),
    onSuccess: () => {
      notifications.show({
        message: "원작자가 수정되었어요",
        color: "green",
      });
      queryClient.invalidateQueries({
        queryKey: ["originalAuthors"],
      });
    },
  });

  const deleteOriginalAuthor = useMutation({
    mutationFn: (id: number) => originalAuthorApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["originalAuthors"],
      });
    },
    onError: (e) => {
      if (e instanceof AxiosError && e.response?.status === 404) {
        notifications.show({
          message: "존재하지 않는 원작자에요",
          color: "red",
        });
        queryClient.invalidateQueries({
          queryKey: ["originalAuthors"],
        });
      }
    },
  });

  return {
    originalAuthors,
    isLoading,
    isError,
    createOriginalAuthor,
    updateOriginalAuthor,
    deleteOriginalAuthor,
  };
}
