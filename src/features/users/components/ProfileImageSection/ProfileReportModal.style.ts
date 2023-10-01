import styled from "@emotion/styled";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;

export const Title = styled.h4`
  ${({ theme }) => theme.typo["title-1-b"]}
`;

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  padding: 0;
  background-color: #fff;
  cursor: pointer;
`;
