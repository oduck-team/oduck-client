import { CaretDown } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import {
  NoticeAccordionContainer,
  Header,
  Title,
  Category,
  ToggleButton,
  Datetime,
  Content,
} from "./style";

// interface NoticeAccordionProps {}

export default function NoticeAccordion() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggleButton = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <NoticeAccordionContainer>
      <Header>
        <Title>
          <Category>[공지]</Category>서비스 긴급 점검 안내
        </Title>
        <ToggleButton onClick={handleToggleButton}>
          <motion.span
            animate={{
              rotate: !isCollapsed ? 180 : 0,
              translateY: !isCollapsed ? -4 : 0,
            }}
            transition={{ duration: 0.15 }}
          >
            <CaretDown size={18} />
          </motion.span>
        </ToggleButton>
      </Header>

      <AnimatePresence>
        {!isCollapsed && (
          <motion.div
            aria-expanded={!isCollapsed}
            initial={{ opacity: 0, scale: 0.95, height: 0 }}
            animate={{ opacity: 1, scale: 1, height: "auto" }}
            exit={{ opacity: 0, scale: 0.95, height: 0 }}
            transition={{ duration: 0.13 }}
          >
            <Content>베타버전 업데이트 내용입니다.</Content>
          </motion.div>
        )}
      </AnimatePresence>

      <Datetime>
        <time dateTime="2022-12-30">2022-12-30</time>
      </Datetime>
    </NoticeAccordionContainer>
  );
}
