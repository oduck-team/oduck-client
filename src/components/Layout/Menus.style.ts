import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0;

  & > a {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const UserMenus = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem 0;
`;

export const HelpMenus = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem 0;
`;

export const Divider = styled.div`
  margin: 1rem 0;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.neutral["30"]};
`;
