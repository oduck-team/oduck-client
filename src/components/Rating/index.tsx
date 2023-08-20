import { Star } from "iconoir-react";
import { ComponentProps, useEffect, useRef, useState } from "react";

import {
  BackStarContainer,
  ColorStarContainer,
  Container,
  EventContainer,
} from "./style";

type Size = "lg" | "md" | "sm";

export interface RatingProps extends ComponentProps<"div"> {
  readonly size?: Size;
  readonly readonly?: boolean;
  readonly value?: number;
}

export const Sizes: Record<Size, number> = {
  sm: 16,
  md: 24,
  lg: 36,
};

export default function Rating({
  size = "md",
  readonly,
  value = 10,
  style,
}: RatingProps) {
  const [rating, setRating] = useState(0); // 별점
  const [save, setSave] = useState(false); // 별점 저장 여부
  const [startX, setStartX] = useState(0); // ColorStarContainer Width 계산을 위해 필요
  const ContainerRef = useRef<HTMLDivElement | null>(null); // startX와 같은 이유로 필요

  const handleTouchDrag = (e: React.TouchEvent<HTMLDivElement>) => {
    const dist = e.touches[0].clientX - startX;
    calcRating(dist);
  };

  const handleHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const dist = e.clientX - startX;
    calcRating(dist);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const dist = e.clientX - startX;
    calcRating(dist);
    if (!save) setSave((prev) => !prev);
  };

  const handleTouchEnd = () => {
    if (!save) setSave((prev) => !prev);
  };

  const calcRating = (n: number) => {
    const result = Math.round(n / (Sizes[size] / 2)) * (Sizes[size] / 2);
    let newRating = result / (Sizes[size] / 2);
    if (newRating > 10) newRating = 10;
    if (newRating < 0) newRating = 10 + newRating;
    setRating(newRating);
  };

  // readonly인 경우 ColorStar rating 설정
  useEffect(() => {
    if (value) setRating(value);
  }, [value]);

  // Event를 통해 변화시킬 ColorStarCOntainer의 width를 계산을 위해 x좌표 시작 지점을 지정
  useEffect(() => {
    if (ContainerRef.current)
      setStartX(ContainerRef.current.getBoundingClientRect().left);
  }, []);

  // 별점 save 처리
  useEffect(() => {
    if (!readonly && save && rating !== 0) {
      console.log("rating:", rating);
      /* 별을 클릭하여 애니에 대한 별점을 추가 또는 취소했을 때 수행할 것 
      (ex. 서버에 rating POST)
      */
      setSave((prev) => !prev);
    }
  }, [readonly, save, rating]);

  return (
    <Container size={size} readonly={readonly} style={style}>
      {readonly && <EventContainer />}
      {!readonly && (
        <EventContainer
          ref={ContainerRef}
          onTouchMove={handleTouchDrag}
          onClick={handleClick}
          onMouseMove={handleHover}
          onTouchEnd={handleTouchEnd}
        />
      )}
      <BackStarContainer>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </BackStarContainer>
      <ColorStarContainer width={rating * 10}>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </ColorStarContainer>
    </Container>
  );
}
