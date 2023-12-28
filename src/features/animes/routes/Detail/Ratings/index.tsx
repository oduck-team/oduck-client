import { useTheme } from "@emotion/react";
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
  const ranks = calculateRanks(statics);
  const theme = useTheme();

  const progressColor = (val: number) =>
    theme.colors["primary"][
      (60 - 10 * val).toString() as keyof typeof theme.colors.primary
    ];

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
            margin: "2px auto 0",
          }}
        />
      </AverageRatings>

      <AttractionPoint>
        <h2>입덕포인트</h2>
        <Grid>
          <AttractionPointLabel>작화</AttractionPointLabel>
          <Progress
            isRounded
            value={statics.drawing}
            color={progressColor(ranks.drawing)}
          />
          <AttractionPointRatio>{statics.drawing}%</AttractionPointRatio>
        </Grid>
        <Grid>
          <AttractionPointLabel>스토리</AttractionPointLabel>
          <Progress
            isRounded
            value={statics.story}
            color={progressColor(ranks.story)}
          />
          <AttractionPointRatio>{statics.story}%</AttractionPointRatio>
        </Grid>
        <Grid>
          <AttractionPointLabel>음악</AttractionPointLabel>
          <Progress
            isRounded
            value={statics.music}
            color={progressColor(ranks.music)}
          />
          <AttractionPointRatio>{statics.music}%</AttractionPointRatio>
        </Grid>
        <Grid>
          <AttractionPointLabel>캐릭터</AttractionPointLabel>
          <Progress
            isRounded
            value={statics.character}
            color={progressColor(ranks.character)}
          />
          <AttractionPointRatio>{statics.character}%</AttractionPointRatio>
        </Grid>
        <Grid>
          <AttractionPointLabel>성우</AttractionPointLabel>
          <Progress
            isRounded
            value={statics.voiceActor}
            color={progressColor(ranks.voiceActor)}
          />
          <AttractionPointRatio>{statics.voiceActor}%</AttractionPointRatio>
        </Grid>
      </AttractionPoint>
    </Section>
  );
}

function calculateRanks(obj: AttractionPointStatics) {
  const ranks: AttractionPointStatics = {
    drawing: 0,
    story: 0,
    music: 0,
    character: 0,
    voiceActor: 0,
  };

  const sorted: [string, number][] = Object.entries(obj).sort(
    (a, b) => b[1] - a[1],
  );

  let currentRank = 0;
  let currentScore = sorted[0][1];

  const scores = sorted.map((el) => el[1]);
  scores.forEach((val, i) => {
    const key = sorted[i][0] as keyof AttractionPoint;
    const rank = currentScore <= val ? currentRank : currentRank + 1;
    ranks[key] = rank;
    currentRank = rank;
    currentScore = val;
  });

  return ranks;
}
