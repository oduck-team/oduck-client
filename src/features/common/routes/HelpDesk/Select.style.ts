import styled from "@emotion/styled";

export const Header = styled.div`
  background-color: white;
  width: 100%;
  height: 90px;
  padding: 40px 16px 0;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  ${({ theme }) => theme.typo["title-3-b"]};
  color: ${({ theme }) => theme.colors["neutral"]["80"]};

  & > svg {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 17px;
    color: ${({ theme }) => theme.colors["neutral"]["90"]};
    cursor: pointer;
  }
`;

export const Container = styled.div`
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
