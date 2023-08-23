import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";

import Button from "@/components/Button";
import Chip from "@/components/Chip";
import Progress from "@/components/Progress";
import Rating from "@/components/Rating";
import BaseStat from "@/components/Stat";
import SimpleReview from "@/features/reviews/components/SimpleReview";
import LikeButton from "@/features/reviews/components/LikeButton";

export default function AnimationDetail() {
  const [isExpanded, setIsExpanded] = useState(false);

  const TEMP_IMAGE =
    "https://prcdn.freetls.fastly.net/release_image/2492/248/2492-248-206b4040c9713f56fe9a0b06e1aa43f8-1920x1080.jpg?format=jpeg&auto=webp&quality=85%2C65&width=1950&height=1350&fit=bounds";

  return (
    <Container>
      <Hero>
        <HeroBanner>
          <HeroImage url={TEMP_IMAGE}></HeroImage>
          <HeroImageGradient />
          <HeroInfo>
            <h1>주술회전 2기</h1>
            <div style={{ width: "100%", paddingTop: "16px" }}>
              <span>판타지 | 12부작 | 완결 | 15세</span>
            </div>
          </HeroInfo>
        </HeroBanner>
        <HeroActions>
          <Stat
            primary
            items={[
              { title: "별점", data: "4.8" },
              { title: "한줄리뷰", data: "111" },
              { title: "덕후", data: "1111" },
              { title: "방영년도", data: "2023" },
            ]}
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
        </HeroActions>
      </Hero>

      <Divider />

      <Section>
        <h1>줄거리 및 정보</h1>
        <Plot isExpanded={isExpanded}>
          줄거리가 너무 기렁용 줄거리가 너무 기러용 줄거리가 너무 기렁용
          줄거리가 넘누 기러용 줄거리가 너무 기러용 줄거리가 너무기러용 줄거리가
          너무 길어용 줄거리가 너무 길어용 줄거리가 너무기러용
        </Plot>
        <MoreButton>더 보기</MoreButton>
        <ul>
          <li>
            <span>작가</span>
            <span>이름</span>
          </li>
          <li>
            <span>성우진</span>
            <span>이름1, 이름2, 이름3,</span>
          </li>
          <li>
            <span>제작사</span>
          </li>
        </ul>
      </Section>

      <Divider />

      <Section>
        <h1>평점</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{ display: "flex", justifyContent: "center", gap: "8px" }}
          >
            <span style={{ fontSize: "32px" }}>😆</span>
            <span style={{ fontSize: "32px", fontWeight: "bold" }}>4.2</span>
          </div>
          <Rating
            readonly
            style={{
              marginTop: "2px",
              marginRight: "auto",
              marginLeft: "auto",
            }}
          />
        </div>

        <AttractionPoint>
          <h2>입덕포인트</h2>
          <GridContainer>
            <AttractionPointLabel>작화</AttractionPointLabel>
            <Progress isRounded value={100} />
            <AttractionPointRatio>100%</AttractionPointRatio>
          </GridContainer>
          <GridContainer>
            <AttractionPointLabel>스토리</AttractionPointLabel>
            <Progress isRounded value={60} style={{ opacity: 0.9 }} />
            <AttractionPointRatio>100%</AttractionPointRatio>
          </GridContainer>
          <GridContainer>
            <AttractionPointLabel>음악</AttractionPointLabel>
            <Progress isRounded value={50} style={{ opacity: 0.8 }} />
            <AttractionPointRatio>100%</AttractionPointRatio>
          </GridContainer>
          <GridContainer>
            <AttractionPointLabel>캐릭터</AttractionPointLabel>
            <Progress isRounded value={40} style={{ opacity: 0.7 }} />
            <AttractionPointRatio>100%</AttractionPointRatio>
          </GridContainer>
          <GridContainer>
            <AttractionPointLabel>성우</AttractionPointLabel>
            <Progress isRounded value={30} style={{ opacity: 0.6 }} />
            <AttractionPointRatio>100%</AttractionPointRatio>
          </GridContainer>
        </AttractionPoint>
      </Section>

      <Divider />

      <Section style={{ paddingBottom: "200px" }}>
        <h1>한 줄 리뷰</h1>
        <p style={{ marginTop: "8px", marginBottom: "8px" }}>
          총 1,120명이 리뷰를 남겨 주셨어요
        </p>
        <ul
          style={{
            display: "flex",
            gap: "4px",
            paddingBottom: "16px",
            borderBottom: "1px solid #F1F1F1",
          }}
        >
          <li>
            <Chip styleType="selectable" active>
              좋아요순
            </Chip>
          </li>
          <li>
            <Chip styleType="selectable">최신순</Chip>
          </li>
          <li>
            <Chip styleType="selectable">평점 높은 순</Chip>
          </li>
          <li>
            <Chip styleType="selectable">평점 낮은 순</Chip>
          </li>
        </ul>

        <ul>
          <li></li>
          <li>
            <SimpleReview>
              <SimpleReview.Header rating={5} userId="123" userName="John" />
              <SimpleReview.Content isSpoiler={true}>
                스포일러 스포일러 스포일러 스포일러스포일러 스포일러스포일러
                스포일러스포일러 스포일러스포일러 스포일러스포일러
                스포일러스포일러 스포일러스포일러 스포일러스포일러
                스포일러스포일러 스포일러스포일러 스포일러스포일러
                스포일러스포일러 스포일러
              </SimpleReview.Content>
              <SimpleReview.Actions>
                <LikeButton isLike={false} count={0} onClick={() => {}} />
              </SimpleReview.Actions>
            </SimpleReview>
          </li>
        </ul>
      </Section>
    </Container>
  );
}

const Container = styled.main`
  height: 100%;
`;

const Hero = styled.div`
  padding-bottom: 24px;
`;

const HeroBanner = styled.div`
  position: relative;
  height: 256px;

  ${({ theme }) => theme.mq("sm")} {
    height: 368px;
  }

  ${({ theme }) => theme.mq("md")} {
    height: 440px;
  }
`;

const HeroImage = styled.div<{ url: string }>`
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: url(${({ url }) => url});
  background-size: cover;
  background-repeat: no-repeat;

  ${({ theme }) => theme.mq("md")} {
    background-position-y: -30px;
  }
`;

const HeroImageGradient = styled.div`
  position: absolute;
  height: 256px;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.9) 100%
  );

  ${({ theme }) => theme.mq("sm")} {
    height: 368px;
  }

  ${({ theme }) => theme.mq("md")} {
    height: 440px;
  }
`;

const HeroInfo = styled.div`
  ${({ theme }) => theme.container}
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 56px;
  margin: 0 16px;
  ${({ theme }) => theme.mq("md")} {
    margin: 0 40px;
  }

  & > h1 {
    ${({ theme }) => theme.typo["title-1-b"]}
    color: #fff;
    text-shadow: 0px 2px 16px rgba(0, 0, 0, 0.34);

    ${({ theme }) => theme.mq("md")} {
      ${({ theme }) => theme.typo["heading-1"]}
    }
  }

  & span {
    ${({ theme }) => theme.typo["body-3-m"]}
    color: #fff;
    text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.5);
    opacity: 0.8;

    ${({ theme }) => theme.mq("md")} {
      ${({ theme }) => theme.typo["body-1-m"]}
    }
  }
`;

const HeroActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
`;

const Stat = styled(BaseStat)`
  transform: translateY(-50%);
  /* margin: 0 auto; */
`;

const Plot = styled.p<{ isExpanded: boolean }>`
  display: -webkit-box;
  margin-top: 8px;
  margin-bottom: 8px;
  -webkit-line-clamp: ${({ isExpanded }) => (isExpanded ? "none" : "2")};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MoreButton = styled.button``;

const Section = styled.section`
  padding: 16px;

  & > h1 {
    ${({ theme }) => theme.typo["title-3-m"]}
    ${({ theme }) => theme.mq("md")} {
      ${({ theme }) => theme.typo["title-2-m"]}
    }
  }
`;

function Divider() {
  const theme = useTheme();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <span
        style={{
          display: "inline-block",
          height: "1px",
          backgroundColor: theme.colors.neutral["20"],
        }}
      />
      <span
        style={{
          display: "inline-block",
          height: "7px",
          backgroundColor: theme.colors.neutral["05"],
        }}
      />
    </div>
  );
}

const AttractionPoint = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;

  & > h2 {
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.neutral["50"]};
    ${({ theme }) => theme.typo["body-3-r"]};
    ${({ theme }) => theme.mq("md")} {
      ${({ theme }) => theme.typo["body-2-r"]}
    }
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  gap: 14px;
  align-items: center;
`;

const AttractionPointLabel = styled.span`
  text-align: right;
  color: ${({ theme }) => theme.colors.neutral["80"]};
  ${({ theme }) => theme.typo["body-3-r"]};
  ${({ theme }) => theme.mq("md")} {
    ${({ theme }) => theme.typo["body-2-r"]}
  }
`;

const AttractionPointRatio = styled.div`
  ${({ theme }) => theme.typo["body-3-r"]};
  ${({ theme }) => theme.mq("md")} {
    ${({ theme }) => theme.typo["body-2-r"]}
  }
`;
