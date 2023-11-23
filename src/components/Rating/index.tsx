import { Star } from "@phosphor-icons/react";
import { ComponentProps, useEffect, useRef, useState } from "react";

import {
  BackStarContainer,
  ColorStarContainer,
  RatingContainer,
  EventContainer,
  Sizes,
} from "./style";

export type Size = "lg" | "md" | "sm";
export type Color = "primary" | "secondary";

export interface RatingProps extends ComponentProps<"div"> {
  size?: Size;
  color?: Color;
  readonly?: boolean;
  value?: number;
  onRate?: (value: number) => void;
}

export default function Rating({
  size = "md",
  color = "secondary",
  readonly,
  value = 10,
  style,
  onRate,
}: RatingProps) {
  const [rating, setRating] = useState(0); // 별점
  const [save, setSave] = useState(false); // 별점 저장 여부
  const [startX, setStartX] = useState(0); // ColorStarContainer Width 계산을 위해 필요
  const [isLoading, setIsLoading] = useState(false); // 데스크탑에서 click 후 로딩 상태
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
    setIsLoading(true); // 데스크탑에서 별점 평가 후, 바로 마우스 leave 시 깜빡이는 현상 수정
    setTimeout(() => setIsLoading(false), 200);
    if (!save) setSave((prev) => !prev);
  };

  const handleMouseLeave = () => {
    if (isLoading) return; // 데스크탑에서 별점 평가 후, 바로 마우스 leave 시 깜빡이는 현상 수정
    if (!save) setRating(value);
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
    if (!readonly && save && rating !== 0 && onRate) {
      onRate(rating);
      setSave((prev) => !prev);
    }
  }, [readonly, save, rating, onRate]);

  return (
    <RatingContainer size={size} readonly={readonly} style={style}>
      {readonly && <EventContainer />}
      {!readonly && (
        <EventContainer
          ref={ContainerRef}
          onTouchMove={handleTouchDrag}
          onClick={handleClick}
          onMouseMove={handleHover}
          onTouchEnd={handleTouchEnd}
          onMouseLeave={handleMouseLeave}
        />
      )}
      <BackStarContainer>
        <Star weight="fill" />
        <Star weight="fill" />
        <Star weight="fill" />
        <Star weight="fill" />
        <Star weight="fill" />
      </BackStarContainer>
      <ColorStarContainer width={rating * 10} color={color}>
        <Star weight="fill" />
        <Star weight="fill" />
        <Star weight="fill" />
        <Star weight="fill" />
        <Star weight="fill" />
      </ColorStarContainer>
    </RatingContainer>
  );
}
