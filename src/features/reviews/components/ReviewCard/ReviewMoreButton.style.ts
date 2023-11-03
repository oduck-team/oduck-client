import styled from "@emotion/styled";

import Button from "@/components/Button";

export const MoreButton = styled(Button)`
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.neutral[10]};
    }
  }
`;

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
