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
  z-index: ${({ theme }) => theme.zIndex.default};
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  gap: 32px 0px;
  flex-wrap: wrap;
  padding: 24px 16px;
`;

export const AnimeSkeletonContainer = styled.div`
  width: calc(50% - 4px);
  &:nth-child(odd) {
    margin-right: 8px;
  }
  ${({ theme }) => theme.mq("sm")} {
    width: calc(33% - 4px);
    &:nth-child(odd) {
      margin-right: 0;
    }
    &:not(:nth-child(3n)) {
      margin-right: 8px;
    }
  }

  display: flex;
  gap: 8px;
`;
