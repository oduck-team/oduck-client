import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 0 -16px;
  border-top: 1px solid ${({ theme }) => theme.colors.neutral["10"]};
  padding: 24px 16px 20px;

  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral["10"]};
  }
`;
