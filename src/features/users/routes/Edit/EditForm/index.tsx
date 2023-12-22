import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@/components/Button";
import Textarea from "@/components/TextArea";
import TextInput from "@/components/TextInput";
import ProfileImageSection from "@/features/users/components/ProfileImageSection";
import ProfileAvatar from "@/features/users/components/ProfileImageSection/ProfileAvatar";
import useEditForm from "@/features/users/hooks/useEditForm";
import { readFile } from "@/libs/imageCrop";

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
  const { form, status, isFormChange, handleInputChange, handleFormSumbit } =
    useEditForm(name, description);
  const navigate = useNavigate();
  /** 이미지 crop */
  const artRef = useRef<HTMLInputElement>(null); // 배경 이미지 input
  const [isArtCropModal, setIsArtCropModal] = useState(false);
  const [artSrc, setArtSrc] = useState<string>(); // 사용자의 원본 배경 이미지
  const [croppedArtImage, setCroppedArtImage] = useState<File>(); // crop 배경 이미지

  const handleArtEditClick = () => {
    setIsArtCropModal(true);
    if (!artSrc) artRef.current?.click(); // 배경 이미지 input open
  };

  const handleArtImageChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const imageDataUrl = await readFile(file);
      setArtSrc(imageDataUrl);
    }
  };

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
          onClose={() => setIsArtCropModal(false)}
          onSaveCroppedImage={(file: File) => setCroppedArtImage(file)}
        />
      )}
    </EditFormContainer>
  );
}
