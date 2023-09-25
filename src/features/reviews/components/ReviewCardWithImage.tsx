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
  /*** isBlock: 위, 아래 border를 양옆에 붙이는 옵션 */
  isBlock?: boolean;
}

export default function ReviewCardWithImage({
  review: { animation, content, createdAt },
  isBlock,
}: ReviwCardWithImageProps) {
  return (
    <ReviewCardWithImageContainer isBlock={isBlock}>
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
