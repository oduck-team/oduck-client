import styled from "@emotion/styled";

export const RecentReviewContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Header = styled.div`
  width: 100%;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors["neutral"]["100"]};
  ${({ theme }) => theme.typo["title-2-m"]};
`;

export const ReviewConainer = styled.div`
  border-top: solid 2px ${({ theme }) => theme.colors["neutral"]["05"]};
  border-bottom: solid 2px ${({ theme }) => theme.colors["neutral"]["05"]};
  padding: 0 16px;
`;
