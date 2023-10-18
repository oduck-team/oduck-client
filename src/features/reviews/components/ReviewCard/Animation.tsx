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
    image: string;
    rating: number;
  };
}

export default function Anime({ anime }: AnimeProps) {
  return (
    <AnimeConatiner>
      <Image src={anime.image} alt={anime.title} />
      <TitleContainer>
        <Title>{anime.title}</Title>
        <Rating color="primary" value={anime.rating} size="sm" readonly />
      </TitleContainer>
    </AnimeConatiner>
  );
}
