import styled from "@emotion/styled";

import BaseTabs from "@/components/Tabs";

export const AnimationListContainer = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 66px;
`;

export const Tabs = styled(BaseTabs)`
  ul {
    width: 100%;
    max-width: 600px;
    position: fixed;
    top: 60px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 74px 16px 24px;
`;
