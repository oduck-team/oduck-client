import styled from "@emotion/styled";

export const EmptyReivewContainer = styled.div`
  width: 100%;
  padding: 26px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  button {
    width: fit-content;
    font-weight: 500;
    font-size: 14px;
    padding: 8px 24px;
  }
`;

export const EmptyImage = styled.img`
  width: 80px;
  height: 80px;
`;

export const Message = styled.h1`
  ${({ theme }) => theme.typo["body-2-r"]};
  color: ${({ theme }) => theme.colors["neutral"]["40"]};
`;
