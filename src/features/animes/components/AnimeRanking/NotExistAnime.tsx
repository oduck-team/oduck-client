import { NotExistAnimeContainer } from "./NotExistAnime.style";

interface NotExistAnimeProps {
  message?: string;
}

export default function NotExistAnime({ message }: NotExistAnimeProps) {
  return (
    <NotExistAnimeContainer>
      <img src="/logo/logo-empty.png" alt="집계중" />
      {message && <span>{message}</span>}
    </NotExistAnimeContainer>
  );
}
