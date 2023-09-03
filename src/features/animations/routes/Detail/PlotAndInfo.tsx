import { IAnimation } from "../../types";

import { Grid, Plot } from "./PlotAndInfo.style";

import { Section } from ".";

interface PlotAndInfoProps {
  animation: IAnimation;
}

export default function PlotAndInfo({ animation }: PlotAndInfoProps) {
  return (
    <Section>
      <h1>줄거리 및 정보</h1>
      <Plot isExpanded={true}>{animation.plot}</Plot>
      <Grid>
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
          <span>{animation.studios.map((studio) => studio.name)}</span>
        </li>
      </Grid>
    </Section>
  );
}
