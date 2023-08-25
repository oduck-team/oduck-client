import styled from "@emotion/styled";

export const Container = styled.li`
  border-radius: 6px;
  transition: colors 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral["05"]};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.neutral["10"]};
  }

  & > a {
    ${({ theme }) => theme.typo["body-2-m"]}
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0 1rem;
    height: 40px;
  }
`;
