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

interface ReviwCardWithImage {
  review: {
    animation: {
      title: string;
      image: string;
      rating: number;
    };
    content: string;
    createdAt: string;
  };
}

export default function ReviewCardWithImage({
  review: { animation, content, createdAt },
}: ReviwCardWithImage) {
  return (
    <ReviewCardWithImageContainer>
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
