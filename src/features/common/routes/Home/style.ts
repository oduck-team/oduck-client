import styled from "@emotion/styled";

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 66px;
`;

export const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 16px 28px;

  & > span {
    ${({ theme }) => theme.typo["body-2-r"]};
    color: ${({ theme }) => theme.colors["neutral"]["60"]};
    text-align: center;
  }
`;
