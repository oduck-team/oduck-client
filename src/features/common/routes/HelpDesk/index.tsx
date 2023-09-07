import styled from "@emotion/styled";
import { useState } from "react";

import Head from "@/components/Head";

import Form from "./Form";
import Select from "./Select";
import Success from "./Success";

export default function HelpDesk() {
  const [inquiryType, setInquiryType] = useState(0);
  const inquiryTypeName = ["기능 추가 건의", "버그 신고", "기타 문의"];
  const [translateX, setTranslateX] = useState(0);

  const [success, setSuccess] = useState(false);

  const goPrev = () => {
    setInquiryType(0);
    setTranslateX(0);
  };

  const handleItemClick = (i: number) => {
    setInquiryType(i + 1);
    setTranslateX(-50);
  };

  return (
    <>
      <Head title="오덕 | 고객센터" />
      <Container>
        {success && <Success />}
        <Slide translateX={translateX}>
          <Select inquiryTypeName={inquiryTypeName} onClick={handleItemClick} />
          <Form
            inquiryTypeName={inquiryTypeName[inquiryType - 1]}
            goPrev={goPrev}
            setSuccess={setSuccess}
          />
        </Slide>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 66px;
  overflow: hidden;
`;

const Slide = styled.div<{ translateX?: number }>`
  width: 200%;
  height: 100%;
  display: flex;
  transform: ${({ translateX = 0 }) => `translateX(${translateX}%)`};
  transition: all 0.3s;
`;
