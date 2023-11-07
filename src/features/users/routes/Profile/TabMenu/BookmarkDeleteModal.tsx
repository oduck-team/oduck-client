import { CheckCircle, WarningCircle, X } from "@phosphor-icons/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

import Button from "@/components/Button";
import Modal from "@/components/Modal";
import useToast from "@/components/Toast/useToast";
import useAuth from "@/features/auth/hooks/useAuth";
import { useApi } from "@/hooks/useApi";

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
  const navigate = useNavigate();
  const toast = useToast();
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
              toast.open({
                message: "로그인 시간이 만료되었어요.\n다시 로그인해 주세요.",
                icon: <CheckCircle weight="fill" />,
                iconColor: "warn",
                buttonText: "로그인",
                onClickButton: () => navigate("/login"),
                position: "top",
              });
              break;
            default:
              toast.open({
                message: "오류가 발생했어요. 잠시 후 다시 시도해 주세요.",
                icon: <WarningCircle weight="fill" />,
                iconColor: "warn",
                position: "top",
              });
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
