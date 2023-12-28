import { CaretLeft } from "@phosphor-icons/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";

import Head from "@/components/Head";
import Header from "@/components/Layout/Header";
import { HelpDeskContext } from "@/contexts/HelpDeskContext";

import Form from "./Form";
import Select from "./Select";
import { HelpDeskContainer, Slide } from "./style";
import Success from "./Success";

export default function HelpDesk() {
  const inquiryTypeName = ["기능 추가 건의", "버그 신고", "기타 문의"];
  const CHANGE_HEADER_TITLE_DELAY = 200;

  const { inquiryType, updateInquiryType } = useContext(HelpDeskContext);
  const [headerTitle, setHeaderTitle] = useState(
    inquiryType === 0 ? "고객센터" : inquiryTypeName[inquiryType - 1],
  );

  const [translateX, setTranslateX] = useState(inquiryType === 0 ? 0 : -50);

  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const goPrev = () => {
    updateInquiryType(0);
    setTranslateX(0);
    setTimeout(() => setHeaderTitle("고객센터"), CHANGE_HEADER_TITLE_DELAY);
  };

  const handleItemClick = (i: number) => {
    updateInquiryType(i + 1);
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
      <Head title="고객센터 | 오덕" />
      <HelpDeskContainer>
        {success && <Success />}
        <Header>
          <Header.Left>
            <CaretLeft onClick={handlePrevClick} />
          </Header.Left>
          <Header.Center>{headerTitle}</Header.Center>
        </Header>
        <Slide translateX={translateX}>
          <Select inquiryTypeName={inquiryTypeName} onClick={handleItemClick} />
          <Form inquiryType={inquiryType} setSuccess={setSuccess} />
        </Slide>
      </HelpDeskContainer>
    </>
  );
}
