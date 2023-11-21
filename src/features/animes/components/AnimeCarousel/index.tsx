import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";

import Button from "@/components/Button";
import { useApi } from "@/hooks/useApi";

import AnimeCarouselLoading from "./AnimeCarouselLoading";
import SlideItem from "./SlideItem";
import {
  AnimeCarouselContainer,
  Background,
  Slides,
  Indicator,
  IndicatorContainer,
} from "./style";

/**
 * depreacted
 * AnimeMainCarousel 컴포넌트로 변경
 * */
export default function AnimeCarousel() {
  const [currentSlide, setCurrentSlide] = useState(1); // 현재 슬라이드 인덱스
  const [translateValue, setTranslateValue] = useState(0); // 슬라이드 이동(translate)를 위해 사용
  const [transitionValue, setTransitionValue] = useState(0); // 슬라이드 이동 transition 값
  const touchStartX = useRef<number | null>(null); // 터치 start 좌표 값
  const [diffX, setDiffX] = useState(0); // 터치 시작과 터치 종료 사이 좌표 거리
  const slideContainerRef = useRef<HTMLDivElement | null>(null); // 슬라이드 박스 가로 길이 측정에 사용됨
  const [width, setWidth] = useState<number | null>(null); // 슬라이드 박스 가로 길이
  const { animeApi } = useApi();
  const { data: animes, isLoading } = useQuery({
    queryKey: ["listOfRecentReviewed"],
    queryFn: () => animeApi.getListOfRecentReviewed(),
  });

  const SLIDE_RESET_DELAY = 500;
  const SLIDE_AUTO_INTERVAL = 5000;

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
    setDiffX((prev) => prev + diff);
    setTranslateValue(translateValue + diff);
    touchStartX.current = touchCurrentX;
  };

  const handleTouchEnd = () => {
    let newIndex = 0;
    if (width) {
      setTransitionValue(0.5);
      if (diffX > 20) newIndex = currentSlide - 1;
      else if (diffX < -20) newIndex = currentSlide + 1;
      else newIndex = currentSlide;
      setCurrentSlide(newIndex);
      setTranslateValue(width * -newIndex);
    }
    touchStartX.current = null;
    setDiffX(0);
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
    if (!animes) return;

    if (currentSlide < animes.length - 1 && width) {
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

  // 창 크기가 변할 때마다 자연스럽게 가로 길이 재설정 (PC 환경에서 필요)
  /*
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
  */

  // 처음, 마지막 슬라이드일 때 이동
  useEffect(() => {
    if (!animes) return;

    if (width) {
      if (currentSlide === animes.length - 1) {
        goTo(width, 1);
      }
      if (currentSlide === 0) {
        goTo(width, animes.length - 2);
      }
    }
  }, [currentSlide, width, animes]);

  if (isLoading) return <AnimeCarouselLoading />;
  return (
    <>
      {animes && (
        <AnimeCarouselContainer ref={slideContainerRef}>
          <Button
            name="이전"
            variant="text"
            color="neutral"
            size="lg"
            icon={<CaretLeft />}
            onClick={goPrev}
          />
          <Button
            name="다음"
            variant="text"
            color="neutral"
            size="lg"
            icon={<CaretRight />}
            onClick={goNext}
          />
          <Slides
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchDrag}
            onTouchEnd={handleTouchEnd}
            translateValue={translateValue}
            transitionValue={transitionValue}
          >
            {animes.map((anime, i) => (
              <SlideItem anime={anime} key={i} />
            ))}
          </Slides>
          <IndicatorContainer>
            {[...Array(animes.length)].map((_, i) => (
              <Indicator active={currentSlide - 1 === i} key={i}></Indicator>
            ))}
          </IndicatorContainer>
          <Background image={animes[currentSlide]?.thumbnail}></Background>
        </AnimeCarouselContainer>
      )}
    </>
  );
}
