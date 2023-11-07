import styled from "@emotion/styled";

export const EmptyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const ErrorImage = styled.img`
  height: 110px;
  width: 100%;
`;

export const Message = styled.h1`
  ${({ theme }) => theme.typo["body-1-r"]}
  color: ${({ theme }) => theme.colors.neutral["50"]};
  margin: 16px 0;
`;
