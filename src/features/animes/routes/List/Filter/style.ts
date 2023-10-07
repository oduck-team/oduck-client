import styled from "@emotion/styled";

import Button from "@/components/Button";

export const ChipsContainer = styled.div`
  position: relative;
  padding: 0 24px;
  h3 {
    ${({ theme }) => theme.typo["body-1-m"]};
    margin: 24px 0 8px;
    display: flex;
    align-items: center;
  }
`;

export const Chips = styled.div`
  display: flex;
  gap: 8px 4px;
  flex-wrap: wrap;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
`;

export const OkButton = styled(Button)`
  width: 63%;
  span {
    ${({ theme }) => theme.typo["title-3-m"]};
  }
`;

export const ResetButton = styled(Button)`
  padding: 0;
  color: ${({ theme }) => theme.colors["neutral"]["50"]};
  ${({ theme }) => theme.typo["body-3-r"]};
  letter-spacing: normal;
  flex-shrink: 0;
  margin: 0 auto;
`;
