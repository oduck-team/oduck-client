import Card from "./Card";
import { Animation } from "./Carousel";
import { CardSlider, Container } from "./Slide.style";

interface SlideProps {
  title: string;
  animations: Omit<Animation, "review">[];
}

export default function Slide({ title, animations }: SlideProps) {
  return (
    <Container>
      <h1>{title}</h1>
      <CardSlider>
        {animations.map((ani, i) => (
          <Card ani={ani} key={i} />
        ))}
      </CardSlider>
    </Container>
  );
}
