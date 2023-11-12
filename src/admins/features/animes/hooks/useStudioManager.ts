import { notifications } from "@mantine/notifications";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

import useAdminApi from "@/admins/hooks/useAdminApi";
// TODO: 예외 처리
export default function useStudioManager() {
  const { studioApi } = useAdminApi();
  const queryClient = useQueryClient();

  const {
    data: studios,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["studios"],
    queryFn: () => {
      try {
        return studioApi.getList();
      } catch (e) {
        return [];
      }
    },
  });

  const createStudio = useMutation({
    mutationFn: (name: string) => studioApi.create({ name }),
    onSuccess: () => {
      notifications.show({
        message: "제작사가 등록되었어요",
        color: "green",
      });
      queryClient.invalidateQueries({
        queryKey: ["studios"],
      });
    },
  });

  const updateStudio = useMutation({
    mutationFn: ({ id, name }: { id: number; name: string }) =>
      studioApi.update(id, { name }),
    onSuccess: () => {
      notifications.show({
        message: "제작사가 수정되었어요",
        color: "green",
      });
      queryClient.invalidateQueries({
        queryKey: ["studios"],
      });
    },
  });

  const deleteStudio = useMutation({
    mutationFn: (id: number) => studioApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["studios"],
      });
    },
    onError: (e) => {
      if (e instanceof AxiosError && e.response?.status === 404) {
        notifications.show({
          message: "존재하지 않는 제작사에요",
          color: "red",
        });
        queryClient.invalidateQueries({
          queryKey: ["studios"],
        });
      }
    },
  });

  return {
    studios,
    isLoading,
    isError,
    createStudio,
    updateStudio,
    deleteStudio,
  };
}
