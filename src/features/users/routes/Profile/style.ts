import styled from "@emotion/styled";

import ReviewCard from "@/features/reviews/components/ReviewCard";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyleCardReview = styled(ReviewCard)`
  border-top: solid 2px ${({ theme }) => theme.colors["neutral"]["05"]};
  border-bottom: solid 2px ${({ theme }) => theme.colors["neutral"]["05"]};
`;
