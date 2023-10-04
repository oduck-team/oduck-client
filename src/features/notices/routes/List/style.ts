import styled from "@emotion/styled";

import BaseTabs from "@/components/Tabs";

export const Tabs = styled(BaseTabs)`
  ul {
    width: 100%;
    max-width: ${({ theme }) => theme.maxWidth};
    position: sticky;
    top: 60px;
  }
`;

export const NoticeListSection = styled.div`
  padding: 0 16px;
`;
