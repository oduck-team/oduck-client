import Rating from "@/components/Rating";

import {
  AnimeConatiner,
  Image,
  ImageContainer,
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
      <ImageContainer>
        <Image src={anime.thumbnail} alt={anime.title} />
      </ImageContainer>

      <TitleContainer>
        <Title>{anime.title}</Title>
        <Rating color="primary" value={anime.avgScore} size="sm" readonly />
      </TitleContainer>
    </AnimeConatiner>
  );
}
