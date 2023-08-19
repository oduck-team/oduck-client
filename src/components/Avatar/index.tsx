import { Container, UserImage, UserName } from "./style";

export type Size = "xl" | "lg" | "md" | "sm";

export interface AvatarProps {
  readonly userName: string;
  readonly src?: string;
  readonly size?: Size;
}

export default function Avatar({ userName, src, size = "md" }: AvatarProps) {
  const displayName = userName.slice(0, 2); // 사용자이름 첫 두글자만 화면에 표시

  return (
    <Container size={size}>
      {src && <UserImage src={src} alt={userName} />}
      {!src && <UserName size={size}>{displayName}</UserName>}
    </Container>
  );
}
