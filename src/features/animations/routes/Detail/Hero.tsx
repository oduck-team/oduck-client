import Button from "@/components/Button";
import Rating from "@/components/Rating";

import { IAnimation } from "../../types";

import {
  Container,
  Banner,
  Image,
  ImageGradient,
  Info,
  Actions,
  Stat,
} from "./Hero.style";

interface AnimationHeroProps {
  animation: IAnimation;
}

export default function Hero({ animation }: AnimationHeroProps) {
  return (
    <Container>
      <Banner>
        {/* TODO 링크 */}
        <Image url={animation.imageUrl}></Image>
        <ImageGradient />
        <Info>
          <h1>{animation.name}</h1>
          <div style={{ width: "100%", paddingTop: "8px" }}>
            <span>판타지 | {animation.episodeNumber}부작 | 완결 | 15세</span>
          </div>
        </Info>
      </Banner>
      <Actions>
        <Stat
          primary
          items={[
            { title: "별점", data: "4.8" },
            { title: "한줄리뷰", data: "111" },
            { title: "덕후", data: "1111" },
            { title: "방영년도", data: "2023" },
          ]}
          style={{ maxWidth: "600px", margin: "0 auto" }}
        />
        <Rating size="lg" />
        <div
          style={{
            width: "100%",
            paddingTop: "16px",
            marginTop: "16px",
            borderTop: "solid 1px #F1F1F1",
          }}
        >
          <Button
            name="입덕 버튼"
            size="lg"
            isBlock
            color="neutral"
            style={{ fontSize: "14px" }}
          >
            입덕하기
          </Button>
        </div>
      </Actions>
    </Container>
  );
}
