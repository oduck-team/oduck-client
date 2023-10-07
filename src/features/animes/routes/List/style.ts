import styled from "@emotion/styled";

import BaseTabs from "@/components/Tabs";

export const AnimeListContainer = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 66px;
`;

export const Tabs = styled(BaseTabs)`
  width: 100%;
  max-width: 600px;
  position: sticky;
  top: 60px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 24px 16px;
`;
