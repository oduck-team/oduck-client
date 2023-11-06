import Section from "../Section";

import { Grid, Plot } from "./style";

interface PlotAndInfoProps {
  summary: string;
}

export default function PlotAndInfo({ summary }: PlotAndInfoProps) {
  const tempOriginalAuthors = ["작가1", "작가2"];
  return (
    <Section>
      <h1>줄거리 및 정보</h1>
      <Plot isExpanded={true}>{summary}</Plot>
      <Grid>
        <li>
          <span>작가</span>
          <span>
            {tempOriginalAuthors.map((author) => `${author}`).join(", ")}
          </span>
        </li>
        <li>
          <span>성우진</span>
          <span>이름1, 이름2, 이름3,</span>
        </li>
        <li>
          <span>제작사</span>
          {/* <span>{animation.studios.map((studio) => studio.name)}</span> */}
        </li>
      </Grid>
    </Section>
  );
}
