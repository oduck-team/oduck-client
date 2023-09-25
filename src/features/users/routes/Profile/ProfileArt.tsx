import { Container, CustomImage, DefaultImage } from "./ProfileArt.style";

export interface ProfileArtProps {
  src?: string;
}

export default function ProfileArt({ src }: ProfileArtProps) {
  return (
    <Container>
      {!src && <DefaultImage />}
      {src && <CustomImage src={src} />}
    </Container>
  );
}
