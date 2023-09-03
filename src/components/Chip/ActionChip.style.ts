import styled from "@emotion/styled";

export const Container = styled.button`
  width: fit-content;
  height: 32px;
  padding: 8px 16px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.colors["primary"]["50"]};
  background-color: #ffffff;
  color: ${({ theme }) => theme.colors["primary"]["60"]};
  ${({ theme }) => theme.typo["body-2-m"]};
  letter-spacing: normal;
  cursor: pointer;
`;
