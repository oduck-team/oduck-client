import { useTheme } from "@emotion/react";
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

// 임시
type AttractionPointStatics = {
  [K in keyof AttractionPoint]: number;
};

const MOCK_STATICS: AttractionPointStatics = {
  drawing: 100.0,
  story: 30.0,
  music: 70.0,
  character: 45.0,
  voiceActor: 10.0,
};

export default function Ratings({ starScoreAvg }: { starScoreAvg: number }) {
  const ranks = calculateRanks(MOCK_STATICS);
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
            value={MOCK_STATICS.drawing}
            color={progressColor(ranks.drawing)}
          />
          <AttractionPointRatio>{MOCK_STATICS.drawing}%</AttractionPointRatio>
        </Grid>
        <Grid>
          <AttractionPointLabel>스토리</AttractionPointLabel>
          <Progress
            isRounded
            value={MOCK_STATICS.story}
            color={progressColor(ranks.story)}
          />
          <AttractionPointRatio>{MOCK_STATICS.story}%</AttractionPointRatio>
        </Grid>
        <Grid>
          <AttractionPointLabel>음악</AttractionPointLabel>
          <Progress
            isRounded
            value={MOCK_STATICS.music}
            color={progressColor(ranks.music)}
          />
          <AttractionPointRatio>{MOCK_STATICS.music}%</AttractionPointRatio>
        </Grid>
        <Grid>
          <AttractionPointLabel>캐릭터</AttractionPointLabel>
          <Progress
            isRounded
            value={MOCK_STATICS.character}
            color={progressColor(ranks.character)}
          />
          <AttractionPointRatio>{MOCK_STATICS.character}%</AttractionPointRatio>
        </Grid>
        <Grid>
          <AttractionPointLabel>성우</AttractionPointLabel>
          <Progress
            isRounded
            value={MOCK_STATICS.voiceActor}
            color={progressColor(ranks.voiceActor)}
          />
          <AttractionPointRatio>
            {MOCK_STATICS.voiceActor}%
          </AttractionPointRatio>
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
