import {
  ProfileArtContainer,
  CustomImage,
  DefaultImage,
} from "./ProfileArt.style";

export interface ProfileArtProps {
  src?: string;
  userName?: string;
}

export default function ProfileArt({ src, userName }: ProfileArtProps) {
  return (
    <ProfileArtContainer>
      {!src && <DefaultImage />}
      {src && <CustomImage src={src} alt={`${userName}님의 배경 이미지`} />}
    </ProfileArtContainer>
  );
}
