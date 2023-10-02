import AnimationCard from "../AnimationCard";
import { Animation } from "../AnimationCarousel";

import { CardSlider, AnimationSlideContainer } from "./style";

interface AnimationSlideProps {
  title: string;
  animations: Omit<Animation, "review">[];
}

export default function AnimationSlide({
  title,
  animations,
}: AnimationSlideProps) {
  return (
    <AnimationSlideContainer>
      <h1>{title}</h1>
      <CardSlider>
        {animations.map((ani, i) => (
          <AnimationCard ani={ani} key={i} />
        ))}
      </CardSlider>
    </AnimationSlideContainer>
  );
}
