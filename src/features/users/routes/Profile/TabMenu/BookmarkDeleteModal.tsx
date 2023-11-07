import { X } from "@phosphor-icons/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

import Button from "@/components/Button";
import Modal from "@/components/Modal";
import useAuth from "@/features/auth/hooks/useAuth";
import { useApi } from "@/hooks/useApi";
import { useCommonToastError } from "@/libs/error";

import {
  CloseButton,
  ContentContainer,
  Title,
} from "./BookmarkDeleteModal.style";

interface BookmarkDeleteModalProps {
  animeId: number;
  onClose: () => void;
}

export default function BookmarkDeleteModal({
  animeId,
  onClose,
}: BookmarkDeleteModalProps) {
  const { bookmarkApi } = useApi();
  const {
    user: { memberId, name },
  } = useAuth();
  const deleteBookmark = useMutation(() => bookmarkApi.toggleBookmark(animeId));
  const queryClient = useQueryClient();
  const { toastAuthError, toastDefaultError } = useCommonToastError();

  const handleDeleteButtonClick = () => {
    deleteBookmark.mutate(undefined, {
      onSuccess: () => {
        queryClient.invalidateQueries(["profile", name]);
        queryClient.invalidateQueries(["profile", memberId, "bookmark"]);
        queryClient.invalidateQueries(["bookmark", memberId, animeId]);
        queryClient.invalidateQueries(["anime", animeId, memberId]);
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
  };
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
