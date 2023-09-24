import styled from "@emotion/styled";

export const ReviewCardContainer = styled.article`
  padding: 16px;
  border-top: 2px solid ${({ theme }) => theme.colors.neutral[10]};

  &:last-child {
    border-bottom: 2px solid ${({ theme }) => theme.colors.neutral[10]};
  }
`;

export const CreatorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const Username = styled.span`
  ${({ theme }) => theme.typo["body-3-r"]}
  margin-right: 8px;
`;
