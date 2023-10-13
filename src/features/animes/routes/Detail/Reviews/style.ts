import styled from "@emotion/styled";

import { SectionContainer } from "../Section.style";

export const Section = styled(SectionContainer)`
  padding-bottom: 200px;
`;

export const TotalReviews = styled.p`
  ${({ theme }) => theme.typo["body-3-r"]};
  color: ${({ theme }) => theme.colors.neutral["70"]};
  margin-top: 8px;
  margin-bottom: 16px;
`;
