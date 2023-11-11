import styled from "@emotion/styled";

import { SectionContainer } from "../Section.style";

export const Section = styled(SectionContainer)`
  & > ul:first-of-type {
    display: flex;
    gap: 4px;
    padding-bottom: 16px;
  }

  li > article {
    padding-left: 8px;
    padding-right: 10px;
  }
`;

export const TotalReviews = styled.p`
  ${({ theme }) => theme.typo["body-3-r"]};
  color: ${({ theme }) => theme.colors.neutral["70"]};
  margin-top: 8px;
  margin-bottom: 16px;
`;
