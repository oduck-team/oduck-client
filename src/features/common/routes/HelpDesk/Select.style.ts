import styled from "@emotion/styled";

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 50%;
  height: 100%;
  flex-shrink: 0;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 30px 16px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    ${({ theme }) => theme.typo["heading-2"]};
    color: ${({ theme }) => theme.colors["neutral"]["80"]};
    margin-bottom: 8px;
  }
  p {
    ${({ theme }) => theme.typo["body-2-r"]};
    color: ${({ theme }) => theme.colors["neutral"]["50"]};
    margin-bottom: 33px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  button {
    height: 48px;
    ${({ theme }) => theme.typo["body-1-m"]};
    line-height: normal;
    letter-spacing: normal;
    -webkit-tap-highlight-color: transparent !important;
  }
`;
