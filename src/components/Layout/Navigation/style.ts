import styled from "@emotion/styled";

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0;

  & > a {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;
