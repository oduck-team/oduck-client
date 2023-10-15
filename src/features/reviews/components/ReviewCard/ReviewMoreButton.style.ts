import styled from "@emotion/styled";

export const MyRating = styled.span`
  display: block;
  ${({ theme }) => theme.typo["body-2-m"]}
  margin-bottom: 4px;
  margin-left: 4px;
`;

export const RatingContainer = styled.div`
  display: flex;
  justify-content: center;
`;
