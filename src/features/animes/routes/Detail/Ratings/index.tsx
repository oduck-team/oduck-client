import { Star } from "@phosphor-icons/react";

import Progress from "@/components/Progress";
import Rating from "@/components/Rating";
import { AttractionPointStatics } from "@/features/animes/api/AnimeApi";

import Section from "../Section";

import {
  AverageRatings,
  AverageRatingsOverview,
  AttractionPoint,
  AttractionPointLabel,
  AttractionPointRatio,
  Grid,
} from "./style";

interface Props {
  starScoreAvg: number;
  statics: AttractionPointStatics;
}

export default function Ratings({ starScoreAvg, statics }: Props) {
  return (
    <Section>
      <h1>별점</h1>
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
          <Progress isRounded value={statics.drawing} />
          <AttractionPointRatio>{statics.drawing}%</AttractionPointRatio>
        </Grid>
        <Grid>
          <AttractionPointLabel>스토리</AttractionPointLabel>
          <Progress isRounded value={statics.story} style={{ opacity: 0.9 }} />
          <AttractionPointRatio>{statics.story}%</AttractionPointRatio>
        </Grid>
        <Grid>
          <AttractionPointLabel>음악</AttractionPointLabel>
          <Progress isRounded value={statics.music} style={{ opacity: 0.8 }} />
          <AttractionPointRatio>{statics.music}%</AttractionPointRatio>
        </Grid>
        <Grid>
          <AttractionPointLabel>캐릭터</AttractionPointLabel>
          <Progress
            isRounded
            value={statics.character}
            style={{ opacity: 0.7 }}
          />
          <AttractionPointRatio>{statics.character}%</AttractionPointRatio>
        </Grid>
        <Grid>
          <AttractionPointLabel>성우</AttractionPointLabel>
          <Progress
            isRounded
            value={statics.voiceActor}
            style={{ opacity: 0.6 }}
          />
          <AttractionPointRatio>{statics.voiceActor}%</AttractionPointRatio>
        </Grid>
      </AttractionPoint>
    </Section>
  );
}
