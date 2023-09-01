import { Plot } from "./PlotAndInfo.style";

import { Section } from ".";

export default function PlotAndInfo() {
  return (
    <Section>
      <h1>줄거리 및 정보</h1>
      <Plot isExpanded={true}>
        줄거리가 너무 기렁용 줄거리가 너무 기러용 줄거리가 너무 기렁용 줄거리가
        넘누 기러용 줄거리가 너무 기러용 줄거리가 너무기러용 줄거리가 너무
        길어용 줄거리가 너무 길어용 줄거리가 너무기러용
      </Plot>
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
  );
}
