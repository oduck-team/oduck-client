import Rating from "@/components/Rating";

import ActionBar from "./ActionBar";
import {
  AnimationConatiner,
  TitleContainer,
  Image,
  ReviewCardWithImageContainer,
  Title,
} from "./ReviewCardWithImage.style";
import ReviewText from "./ReviewText";

export interface ReviwCardWithImageProps {
  review: {
    animation: {
      title: string;
      image: string;
      rating: number;
    };
    content: string;
    createdAt: string;
  };
  margin?: boolean;
}

export default function ReviewCardWithImage({
  review: { animation, content, createdAt },
  margin,
}: ReviwCardWithImageProps) {
  return (
    <ReviewCardWithImageContainer margin={margin}>
      <AnimationConatiner>
        <Image src={animation.image} alt={animation.title} />
        <TitleContainer>
          <Title>{animation.title}</Title>
          <Rating color="primary" value={animation.rating} size="sm" readonly />
        </TitleContainer>
      </AnimationConatiner>
      <ReviewText text={content} />
      <ActionBar include="time" createdAt={createdAt} />
    </ReviewCardWithImageContainer>
  );
}
