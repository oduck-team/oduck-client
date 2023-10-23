import Rating from "@/components/Rating";

import {
  AnimeConatiner,
  Image,
  Title,
  TitleContainer,
} from "./Animation.style";

interface AnimeProps {
  anime: {
    title: string;
    thumbnail: string;
    avgScore: number;
  };
}

export default function Anime({ anime }: AnimeProps) {
  return (
    <AnimeConatiner>
      <Image src={anime.thumbnail} alt={anime.title} />
      <TitleContainer>
        <Title>{anime.title}</Title>
        <Rating color="primary" value={anime.avgScore} size="sm" readonly />
      </TitleContainer>
    </AnimeConatiner>
  );
}
