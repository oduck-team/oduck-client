import AnimationCard from "./AnimationCard";
import { Animation } from "./AnimationCarousel";
import { CardSlider, Container } from "./AnimationSlide.style";

interface AnimationSlideProps {
  title: string;
  animations: Omit<Animation, "review">[];
}

export default function AnimationSlide({
  title,
  animations,
}: AnimationSlideProps) {
  return (
    <Container>
      <h1>{title}</h1>
      <CardSlider>
        {animations.map((ani, i) => (
          <AnimationCard ani={ani} key={i} />
        ))}
      </CardSlider>
    </Container>
  );
}
