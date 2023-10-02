import styled from "@emotion/styled";
import { NavArrowLeft } from "iconoir-react";
import { useState } from "react";
import { useNavigate } from "react-router";

import Head from "@/components/Head";
import Header from "@/components/Layout/Header";

import Form from "./Form";
import Select from "./Select";
import Success from "./Success";

export default function HelpDesk() {
  const [inquiryType, setInquiryType] = useState(0);
  const inquiryTypeName = ["기능 추가 건의", "버그 신고", "기타 문의"];
  const [headerTitle, setHeaderTitle] = useState("고객센터");
  const [translateX, setTranslateX] = useState(0);

  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const CHANGE_HEADER_TITLE_DELAY = 200;

  const goPrev = () => {
    setInquiryType(0);
    setTranslateX(0);
    setTimeout(() => setHeaderTitle("고객센터"), CHANGE_HEADER_TITLE_DELAY);
  };

  const handleItemClick = (i: number) => {
    setInquiryType(i + 1);
    setTranslateX(-50);
    setTimeout(
      () => setHeaderTitle(inquiryTypeName[i]),
      CHANGE_HEADER_TITLE_DELAY,
    );
  };

  const handlePrevClick = () => {
    if (inquiryType !== 0) goPrev();
    else navigate(-1);
  };

  return (
    <>
      <Head title="오덕 | 고객센터" />
      <HelpDeskContainer>
        {success && <Success />}
        <Header>
          <Header.Left>
            <NavArrowLeft onClick={handlePrevClick} />
          </Header.Left>
          <Header.Center>{headerTitle}</Header.Center>
        </Header>
        <Slide translateX={translateX}>
          <Select inquiryTypeName={inquiryTypeName} onClick={handleItemClick} />
          <Form
            key={inquiryType}
            inquiryTypeName={inquiryTypeName[inquiryType - 1]}
            goPrev={goPrev}
            setSuccess={setSuccess}
          />
        </Slide>
      </HelpDeskContainer>
    </>
  );
}

const HelpDeskContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 66px;
  overflow: hidden;
`;

const Slide = styled.div<{ translateX?: number }>`
  width: 200%;
  height: calc(100% - 60px);
  display: flex;
  transform: ${({ translateX = 0 }) => `translateX(${translateX}%)`};
  transition: all 0.3s;
`;
