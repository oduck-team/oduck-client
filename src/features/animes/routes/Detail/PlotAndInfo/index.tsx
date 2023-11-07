import Section from "../Section";

import { Grid, Plot } from "./style";

interface PlotAndInfoProps {
  /** 줄거리 */
  summary: string;

  /** 원작자 목록 */
  originalAuthors: string[];

  /** 성우진 목록 */
  voiceActors: string[];

  /** 제작사 목록 */
  studios: string[];
}

export default function PlotAndInfo({
  summary,
  originalAuthors,
  voiceActors,
  studios,
}: PlotAndInfoProps) {
  return (
    <Section>
      <h1>줄거리 및 정보</h1>
      <Plot isExpanded={true}>{summary}</Plot>
      <Grid>
        <li>
          <span>작가</span>
          <span>{originalAuthors.join(", ")}</span>
        </li>
        <li>
          <span>성우진</span>
          <span>{voiceActors.join(", ")}</span>
        </li>
        <li>
          <span>제작사</span>
          <span>{studios.join(", ")}</span>
        </li>
      </Grid>
    </Section>
  );
}
