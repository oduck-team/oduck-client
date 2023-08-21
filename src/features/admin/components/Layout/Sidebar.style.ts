import styled from "@emotion/styled";

export const Header = styled.header`
  display: flex;
  gap: 0.5rem;
  padding-left: 0rem;
  padding-bottom: 1rem;
  border-bottom: solid 1px ${({ theme }) => theme.colors.neutral["30"]};
  overflow: hidden;
  transition: padding 0.3s;

  & h1 {
    display: none;
  }
`;
