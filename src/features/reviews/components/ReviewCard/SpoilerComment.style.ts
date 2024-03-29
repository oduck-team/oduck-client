import styled from "@emotion/styled";

export const SpoilerCommentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  width: 100%;
  padding: 0 16px;
  margin: 12px 0 6px;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.neutral["05"]};
  transition: background-color ease-in-out 0.1s;
  cursor: default;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.neutral[10]};
    }
  }
`;

export const Info = styled.span`
  ${({ theme }) => theme.typo["body-3-r"]}
  color: ${({ theme }) => theme.colors.neutral["50"]};
`;

export const Button = styled.button`
  ${({ theme }) => theme.typo["body-3-r"]}
  color: ${({ theme }) => theme.colors.neutral["80"]};
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
