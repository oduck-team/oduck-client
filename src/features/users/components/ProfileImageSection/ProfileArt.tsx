import {
  ProfileArtContainer,
  CustomImage,
  DefaultImage,
} from "./ProfileArt.style";

export interface ProfileArtProps {
  src?: string;
}

export default function ProfileArt({ src }: ProfileArtProps) {
  return (
    <ProfileArtContainer>
      {!src && <DefaultImage />}
      {src && <CustomImage src={src} />}
    </ProfileArtContainer>
  );
}
