import { CaretLeft } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

import Button from "@/components/Button";
import Head from "@/components/Head";
import Header from "@/components/Layout/Header";
import Tabs, { TabItem } from "@/components/Tabs";

import NoticeAccordion from "./NoticeAccordion";
import { NoticeListSection } from "./style";

const tabItems: TabItem[] = [
  {
    id: "all",
    title: "전체",
  },
  {
    id: "notices",
    title: "공지사항",
  },
  {
    id: "update",
    title: "업데이트",
  },
  {
    id: "events",
    title: "이벤트",
  },
];

export default function NoticeList() {
  const navigate = useNavigate();

  const handlePrevClick = () => {
    navigate(-1);
  };

  return (
    <>
      <Head
        title="공지사항 | 오덕"
        description="오덕의 새로운 소식을 만나보세요"
      />
      <Header>
        <Header.Left>
          <Button
            name="뒤로가기"
            variant="text"
            color="neutral"
            icon={<CaretLeft />}
            onClick={handlePrevClick}
          />
        </Header.Left>
        <Header.Center>
          <h1>공지사항</h1>
        </Header.Center>
      </Header>
      <Tabs items={tabItems} defaultActiveId={"all"} />
      <NoticeListSection>
        <NoticeAccordion />
        <NoticeAccordion />
        <NoticeAccordion />
        <NoticeAccordion />
        <NoticeAccordion />
        <NoticeAccordion />
        <NoticeAccordion />
        <NoticeAccordion />
        <NoticeAccordion />
        <NoticeAccordion />
        <NoticeAccordion />
        <NoticeAccordion />
        <NoticeAccordion />
        <NoticeAccordion />
      </NoticeListSection>
    </>
  );
}
