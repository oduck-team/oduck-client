import Progress from "@/components/Progress";
import Rating from "@/components/Rating";

import {
  AttractionPoint,
  AttractionPointLabel,
  AttractionPointRatio,
  Grid,
} from "./Ratings.style";

import { Section } from ".";

export default function Ratings() {
  return (
    <Section>
      <h1>평점</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
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
