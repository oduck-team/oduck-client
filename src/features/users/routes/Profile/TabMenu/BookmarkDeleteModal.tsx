import { X } from "@phosphor-icons/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

import Button from "@/components/Button";
import Modal from "@/components/Modal";
import useToast from "@/components/Toast/useToast";
import useAuth from "@/features/auth/hooks/useAuth";
import useToggleBookmark from "@/features/bookmarks/hooks/useToggleBookmark";
import { useApi } from "@/hooks/useApi";
import useDebounce from "@/hooks/useDebounce";
import { useCommonToastError } from "@/libs/error";

import {
  CloseButton,
  ContentContainer,
  Title,
} from "./BookmarkDeleteModal.style";

interface BookmarkDeleteModalProps {
  animeId: number;
  title: string;
  onClose: () => void;
}

export default function BookmarkDeleteModal({
  animeId,
  title,
  onClose,
}: BookmarkDeleteModalProps) {
  const { bookmarkApi } = useApi();
  const { user } = useAuth();
  const deleteBookmark = useMutation(() => bookmarkApi.toggleBookmark(animeId));
  const queryClient = useQueryClient();
  const { toastAuthError, toastDefaultError } = useCommonToastError();
  const toast = useToast();
  const bookmarkMutation = useToggleBookmark(animeId);

  const handleDeleteButtonClick = useDebounce(() => {
    deleteBookmark.mutate(undefined, {
      onSuccess: () => {
        queryClient.invalidateQueries(["profile", user?.name]);
        queryClient.invalidateQueries(["profile", user?.memberId, "bookmark"]);
        queryClient.invalidateQueries([
          "profile",
          user?.memberId,
          "count",
          "bookmark",
        ]);
        queryClient.invalidateQueries(["bookmark", user?.memberId, animeId]);
        queryClient.invalidateQueries(["anime", animeId, user?.memberId]);

        toast.success({
          message: `${title} 탈덕 했어요.`,
          buttonText: "탈덕 취소하기",
          onClickButton: () => bookmarkMutation.mutate(),
          duration: 4,
        });
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
  }, 200);
  return (
    <>
      <Modal onClose={onClose} size="sm">
        <Modal.Content>
          <ContentContainer>
            <CloseButton type="button" onClick={onClose}>
              <X size={24} />
            </CloseButton>
            <Title>애니를 삭제하시겠습니까?</Title>
          </ContentContainer>
        </Modal.Content>
        <Modal.Actions>
          <Button
            variant="text"
            name="닫기"
            color="neutral"
            isBlock
            onClick={onClose}
          >
            취소
          </Button>
          <Button
            variant="solid"
            name="삭제"
            color="warn"
            isBlock
            onClick={handleDeleteButtonClick}
          >
            삭제
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}
