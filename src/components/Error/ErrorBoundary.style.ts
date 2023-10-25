import styled from "@emotion/styled";

export const FallbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px;

  & > h1 {
    text-align: center;
  }
`;

export const ErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  ${({ theme }) => theme.typo["body-2-r"]}
  color: ${({ theme }) => theme.colors.neutral["50"]};
`;
