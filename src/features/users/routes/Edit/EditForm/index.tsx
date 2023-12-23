import { useNavigate } from "react-router-dom";

import Button from "@/components/Button";
import Textarea from "@/components/TextArea";
import TextInput from "@/components/TextInput";
import ProfileImageSection from "@/features/users/components/ProfileImageSection";
import ProfileAvatar from "@/features/users/components/ProfileImageSection/ProfileAvatar";
import useArtCrop from "@/features/users/hooks/useArtCrop";
import useEditForm from "@/features/users/hooks/useEditForm";

import ImageCropModal from "./ImageCropModal";
import {
  ArtFileInput,
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
    croppedArtImage,
    handleInputChange,
    handleFormSumbit,
    setCroppedArtImage,
  } = useEditForm(name, description);

  const navigate = useNavigate();

  const {
    artRef,
    artSrc,
    isArtCropModal,
    handleArtEditClick,
    handleArtImageChange,
    closeArtCropModal,
    resetUploadedArtImage,
  } = useArtCrop();

  return (
    <EditFormContainer>
      <Form onSubmit={handleFormSumbit}>
        <ProfileImageSection>
          <ProfileImageSection.Art
            src={
              croppedArtImage
                ? URL.createObjectURL(croppedArtImage)
                : backgroundImage
            }
          />
          <ProfileImageSection.ArtEditButton onClick={handleArtEditClick}>
            <ArtFileInput
              type="file"
              accept="image/*"
              ref={artRef}
              onChange={handleArtImageChange}
            />
          </ProfileImageSection.ArtEditButton>
          <ProfileImageSection.ProfileAvatar>
            <ProfileAvatar.Avatar src={thumbnail} userName="FE" size="xl" />
            <ProfileAvatar.AvatarEditButton />
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
      {isArtCropModal && artSrc && (
        <ImageCropModal
          imageSrc={artSrc}
          resetImage={resetUploadedArtImage}
          onClose={closeArtCropModal}
          onSaveCroppedImage={(file: File) => setCroppedArtImage(file)}
        />
      )}
      {isLoading && <span>로딩중</span>}
    </EditFormContainer>
  );
}
