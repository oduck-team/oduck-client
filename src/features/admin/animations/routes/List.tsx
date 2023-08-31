import { Title } from "@mantine/core";
import { useEffect } from "react";

import Head from "@/components/Head";

export default function AnimationList() {
  useEffect(() => {
    fetch("http://localhost:8000/api/v20230821/animation");
  }, []);
  return (
    <>
      <Head title="오덕 | 애니메이션 목록" />
      <Title order={2}>애니메이션 목록</Title>
      <div>조회 섹션</div>
      <div>테이블 섹션</div>
    </>
  );
}
