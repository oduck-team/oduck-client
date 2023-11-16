import { Star } from "@phosphor-icons/react";

import Progress from "@/components/Progress";
import Rating from "@/components/Rating";

import Section from "../Section";

import {
  AverageRatings,
  AverageRatingsOverview,
  AttractionPoint,
  AttractionPointLabel,
  AttractionPointRatio,
  Grid,
} from "./style";

export default function Ratings({ starScoreAvg }: { starScoreAvg: number }) {
  return (
    <Section>
      <h1>평점</h1>
      <AverageRatings>
        <AverageRatingsOverview>
          <Star size={36} weight="fill" />
          <span>{starScoreAvg}</span>
        </AverageRatingsOverview>
        <Rating
          value={starScoreAvg * 2}
          readonly
          style={{
            marginTop: "2px",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        />
      </AverageRatings>

      <AttractionPoint>
        <h2>입덕포인트</h2>
        <Grid>
          <AttractionPointLabel>작화</AttractionPointLabel>
          <Progress isRounded value={100} />
          <AttractionPointRatio>100%</AttractionPointRatio>
        </Grid>
        <Grid>
          <AttractionPointLabel>스토리</AttractionPointLabel>
          <Progress isRounded value={60} style={{ opacity: 0.9 }} />
          <AttractionPointRatio>100%</AttractionPointRatio>
        </Grid>
        <Grid>
          <AttractionPointLabel>음악</AttractionPointLabel>
          <Progress isRounded value={50} style={{ opacity: 0.8 }} />
          <AttractionPointRatio>100%</AttractionPointRatio>
        </Grid>
        <Grid>
          <AttractionPointLabel>캐릭터</AttractionPointLabel>
          <Progress isRounded value={40} style={{ opacity: 0.7 }} />
          <AttractionPointRatio>100%</AttractionPointRatio>
        </Grid>
        <Grid>
          <AttractionPointLabel>성우</AttractionPointLabel>
          <Progress isRounded value={30} style={{ opacity: 0.6 }} />
          <AttractionPointRatio>100%</AttractionPointRatio>
        </Grid>
      </AttractionPoint>
    </Section>
  );
}
