import { NavArrowLeft, NavArrowRight, Star } from "iconoir-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@/components/Button";

import {
  Container,
  Background,
  SlideContainer,
  Slides,
  Slide,
  InfoContainer,
  Info,
  Indicator,
  IndicatorContainer,
  Rating,
  Review,
} from "./Carousel.style";

export interface Animation {
  id: string;
  title: string;
  image: string;
  review: string;
  rating: number;
}

interface Props {
  animations: Animation[];
}

export default function Carousel({ animations }: Props) {
  const [currentSlide, setCurrentSlide] = useState(1); // 현재 슬라이드 인덱스
  const [translateValue, setTranslateValue] = useState(0); // 슬라이드 이동(translate)를 위해 사용
  const [transitionValue, setTransitionValue] = useState(0); // 슬라이드 이동 transition 값
  const touchStartX = useRef<number | null>(null); // 터치 start 좌표 값
  const slideContainerRef = useRef<HTMLDivElement | null>(null); // 슬라이드 박스 가로 길이 측정에 사용됨
  const [width, setWidth] = useState<number | null>(null); // 슬라이드 박스 가로 길이

  const SLIDE_RESET_DELAY = 500;
  const SLIDE_AUTO_INTERVAL = 5000;

  // 무한 캐러셀을 위한 배열 확장
  const animationsList = [
    // animations[animations.length - 1],
    animations.at(-1) as Animation,
    ...animations,
    animations[0],
  ];

  // 모바일 이벤트
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setTransitionValue(0);
  };

  const handleTouchDrag = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    setTransitionValue(0);
    const touchCurrentX = e.touches[0].clientX;
    const diff = touchCurrentX - touchStartX.current;
    setTranslateValue(translateValue + diff);
    touchStartX.current = touchCurrentX;
  };

  const handleTouchEnd = () => {
    if (width) {
      setTransitionValue(0.5);
      const newIndex = Math.min(
        Math.max(Math.round(-translateValue / width), 0),
        animationsList.length - 1,
      );
      setCurrentSlide(newIndex);
      setTranslateValue(width * -newIndex);
    }
    touchStartX.current = null;
  };

  // 처음, 마지막 슬라이드일 때 수행
  const goTo = (width: number, i: number) => {
    setCurrentSlide(i);
    setTimeout(() => {
      setTranslateValue(width * -i);
      setTransitionValue(0);
    }, SLIDE_RESET_DELAY);
  };

  // 다음 슬라이드 이동
  const goNext = () => {
    if (currentSlide < animationsList.length - 1 && width) {
      setTransitionValue(0.5);
      setTranslateValue(width * -(currentSlide + 1));
      setCurrentSlide((prev) => prev + 1);
    }
  };

  // 이전 슬라이드 이동
  const goPrev = () => {
    if (currentSlide > 0 && width) {
      setTransitionValue(0.5);
      setTranslateValue(width * -(currentSlide - 1));
      setCurrentSlide((prev) => prev - 1);
    }
  };

  // 슬라이드 초기 위치(=1) 및 가로 길이 설정
  useEffect(() => {
    if (slideContainerRef.current) {
      const w = slideContainerRef.current.getBoundingClientRect().width;
      setWidth(w);
      setTranslateValue(-w);
    }
  }, []);

  // 5초마다 자동 슬라이드
  useEffect(() => {
    const timer = setInterval(() => {
      goNext();
    }, SLIDE_AUTO_INTERVAL);
    return () => {
      clearInterval(timer);
    };
  });

  // 창 크기가 변할 때마다 자연스럽게 가로 길이 재설정
  useEffect(() => {
    const handleResize = () => {
      if (slideContainerRef.current) {
        const w = slideContainerRef.current.getBoundingClientRect().width;
        setWidth(w);
        setTranslateValue(w * -currentSlide);
        setTransitionValue(0);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [currentSlide]);

  // 처음, 마지막 슬라이드일 때 이동
  useEffect(() => {
    if (width) {
      if (currentSlide === animationsList.length - 1) {
        goTo(width, 1);
      }
      if (currentSlide === 0) {
        goTo(width, animationsList.length - 2);
      }
    }
  }, [currentSlide, width, animationsList.length]);

  return (
    <Container>
      <SlideContainer ref={slideContainerRef}>
        <Button
          name="이전"
          styleType="text"
          color="neutral"
          size="lg"
          icon={<NavArrowLeft />}
          onClick={goPrev}
        ></Button>
        <Button
          name="다음"
          styleType="text"
          color="neutral"
          size="lg"
          icon={<NavArrowRight />}
          onClick={goNext}
        ></Button>
        <Slides
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchDrag}
          onTouchEnd={handleTouchEnd}
          translateValue={translateValue}
          transitionValue={transitionValue}
        >
          {animationsList.map((ani, i) => (
            <SlideItem ani={ani} key={i} />
          ))}
        </Slides>
        <IndicatorContainer>
          {[...Array(animations.length)].map((a, i) => (
            <Indicator active={currentSlide - 1 === i} key={i}></Indicator>
          ))}
        </IndicatorContainer>
      </SlideContainer>
      <Background image={animationsList[currentSlide].image}></Background>
    </Container>
  );
}

function SlideItem({ ani }: { ani: Animation }) {
  const navigate = useNavigate();
  return (
    <Slide image={ani.image} onClick={() => navigate(`/animations/${ani.id}`)}>
      <InfoContainer>
        <Info>
          <div>{ani.title}</div>
          <Review>
            <span>{ani.review}</span>
            <Rating>
              <Star />
              <span> {ani.rating}</span>
            </Rating>
          </Review>
        </Info>
      </InfoContainer>
    </Slide>
  );
}
