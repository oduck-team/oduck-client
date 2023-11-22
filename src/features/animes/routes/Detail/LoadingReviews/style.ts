import styled from "@emotion/styled";

export const ReviewSkeleton = styled.li`
  padding: 16px 10px 20px;

  & > div:nth-of-type(2) {
    margin: 8px 0 4px;
  }

  & > div:nth-of-type(3) {
    margin-bottom: 6px;
  }

  &:first-of-type {
    border-top: 1px solid ${({ theme }) => theme.colors.neutral[10]};
  }

  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[10]};
`;
