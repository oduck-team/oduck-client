import styled from "@emotion/styled";

import Button from "@/components/Button";

export const EmptyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 52px;
`;

export const EmptyImage = styled.img`
  width: 107px;
  height: 107px;
  margin-bottom: 24px;
`;

export const Message = styled.span`
  ${({ theme }) => theme.typo["body-2-r"]}
  color: ${({ theme }) => theme.colors.neutral[40]};
  margin-bottom: 16px;
`;

export const EmptyListButton = styled(Button)`
  width: 202px;
`;
