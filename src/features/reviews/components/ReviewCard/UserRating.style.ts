import styled from "@emotion/styled";

export const CreatorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`;

export const Username = styled.span`
  ${({ theme }) => theme.typo["body-3-r"]}
  margin-right: 8px;
`;
