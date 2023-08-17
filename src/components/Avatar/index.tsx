import { Container, UserImage, UserName } from "./style";

export type Size = "xl" | "lg" | "md" | "sm";

export interface AvatarProps {
  readonly username: string;
  readonly src?: string;
  readonly size?: Size;
}

export default function Avatar({ username, src, size = "md" }: AvatarProps) {
  const displayName = username.slice(0, 2); // 사용자이름 첫 두글자만 화면에 표시

  return (
    <Container size={size}>
      {src && <UserImage src={src} alt={username} />}
      {!src && <UserName size={size}>{displayName}</UserName>}
    </Container>
  );
}
