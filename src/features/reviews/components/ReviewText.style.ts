import styled from "@emotion/styled";

export const Text = styled.p`
  ${({ theme }) => theme.typo["body-2-r"]}
  ${({ theme }) => theme.colors.neutral[80]}
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
`;
