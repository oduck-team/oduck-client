import Rating from "@/components/Rating";

import {
  AnimationConatiner,
  Image,
  Title,
  TitleContainer,
} from "./Animation.style";

interface AnimationProps {
  animation: {
    title: string;
    image: string;
    rating: number;
  };
}

export default function Animation({ animation }: AnimationProps) {
  return (
    <AnimationConatiner>
      <Image src={animation.image} alt={animation.title} />
      <TitleContainer>
        <Title>{animation.title}</Title>
        <Rating color="primary" value={animation.rating} size="sm" readonly />
      </TitleContainer>
    </AnimationConatiner>
  );
}
