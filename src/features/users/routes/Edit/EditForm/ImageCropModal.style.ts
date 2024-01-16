import styled from "@emotion/styled";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 -8px;
`;

export const CropperContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  max-height: 400px;
  border-radius: 4px;
  overflow: hidden;
`;

export const RangeInput = styled.input`
  margin: 16px 0 4px;
`;

export const Information = styled.span`
  ${({ theme }) => theme.typo["body-2-r"]}
  color: ${({ theme }) => theme.colors.warn[60]};
`;
