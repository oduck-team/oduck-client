import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@/components/Button";
import Textarea from "@/components/TextArea";
import TextInput from "@/components/TextInput";
import ProfileImageSection from "@/features/users/components/ProfileImageSection";
import ImageEditButton from "@/features/users/components/ProfileImageSection/ImageEditButton";
import ProfileAvatar from "@/features/users/components/ProfileImageSection/ProfileAvatar";
import useCropModal from "@/features/users/hooks/useCropModal";
import useEditForm from "@/features/users/hooks/useEditForm";

import ImageCropModal from "./ImageCropModal";
import {
  FileInput,
  ButtonContainer,
  EditFormContainer,
  Form,
  InputSection,
  Title,
} from "./style";

interface EditFromProps {
  name: string;
  description: string;
  thumbnail: string;
  backgroundImage: string;
}

export default function EditForm({
  name,
  description,
  thumbnail,
  backgroundImage,
}: EditFromProps) {
  const {
    form,
    status,
    isFormChange,
    isLoading,
    previewArt,
    previewThumbNail,
    handleInputChange,
    handleFormSumbit,
    setCroppedArtImage,
    setCroppedThumbnailImage,
  } = useEditForm(name, description);

  const navigate = useNavigate();

  const artRef = useRef<HTMLInputElement>(null); // 배경 이미지 input
  const thumbnailRef = useRef<HTMLInputElement>(null); // 썸네일 이미지 input

  const {
    imageSrc: artImageSrc,
    isImageCropModal: isArtCropModal,
    handleImageEditClick: handleArtEditClick,
    handleImageChange: handleArtImageChange,
    closeImageCropModal: closeArtCropModal,
    resetUploadedImage: resetUploadedArtImage,
  } = useCropModal(artRef);

  const {
    imageSrc: thumbnailImageSrc,
    isImageCropModal: isThumbnailCropModal,
    handleImageEditClick: handleThumbnailEditClick,
    handleImageChange: handleThumbnailImageChange,
    closeImageCropModal: closeThumbnailCropModal,
    resetUploadedImage: resetUploadedThumbnailImage,
  } = useCropModal(thumbnailRef);

  return (
    <EditFormContainer>
      <Form onSubmit={handleFormSumbit}>
        <ProfileImageSection>
          <ProfileImageSection.Art
            src={previewArt ? previewArt : backgroundImage}
          />
          <ImageEditButton
            croppedImage={previewArt}
            onClick={handleArtEditClick}
            onReset={() => {
              resetUploadedArtImage();
              setCroppedArtImage(null);
            }}
          >
            <FileInput
              type="file"
              accept="image/*"
              ref={artRef}
              onChange={handleArtImageChange}
            />
          </ImageEditButton>
          <ProfileImageSection.ProfileAvatar>
            <ProfileAvatar.Avatar
              src={previewThumbNail ? previewThumbNail : thumbnail}
              userName="FE"
              size="xl"
            />
            <ProfileAvatar.AvatarEditButton onClick={handleThumbnailEditClick}>
              <FileInput
                type="file"
                accept="image/*"
                ref={thumbnailRef}
                onChange={handleThumbnailImageChange}
              />
            </ProfileAvatar.AvatarEditButton>
          </ProfileImageSection.ProfileAvatar>
        </ProfileImageSection>

        <InputSection>
          <div>
            <Title isRequired>닉네임</Title>
            <TextInput
              required
              name="name"
              value={form.name}
              maxLength={10}
              message={status.message}
              warn={status.isWarn}
              spellCheck={false}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div>
            <Title>자기소개</Title>
            <Textarea
              name="description"
              value={form.description}
              placeholder="자기소개를 적어보세요(최대 100자까지 가능합니다)"
              maxLength={100}
              height={"100"}
              spellCheck={false}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </InputSection>
      </Form>
      <ButtonContainer>
        <Button
          type="submit"
          name="저장"
          color={isFormChange ? "primary" : "neutral"}
          isBlock
          size="lg"
          onClick={handleFormSumbit}
        >
          저장
        </Button>
        <Button
          name="취소"
          color="neutral"
          isBlock
          size="lg"
          onClick={() => navigate("/profile")}
        >
          취소
        </Button>
      </ButtonContainer>

      {/* 배경 이미지 crop 모달 */}
      {isArtCropModal && artImageSrc && (
        <ImageCropModal
          imageSrc={artImageSrc}
          aspectWidth={3}
          aspectHeight={1}
          filename="background"
          resetImage={resetUploadedArtImage}
          onClose={closeArtCropModal}
          onSaveCroppedImage={(file: File) => setCroppedArtImage(file)}
        />
      )}

      {/* 썸네일 이미지 crop 모달 */}
      {isThumbnailCropModal && thumbnailImageSrc && (
        <ImageCropModal
          imageSrc={thumbnailImageSrc}
          aspectWidth={1}
          aspectHeight={1}
          filename="thumbnail"
          cropShape="round"
          resetImage={resetUploadedThumbnailImage}
          onClose={closeThumbnailCropModal}
          onSaveCroppedImage={(file: File) => setCroppedThumbnailImage(file)}
        />
      )}
      {isLoading && <span>로딩중</span>}
    </EditFormContainer>
  );
}
