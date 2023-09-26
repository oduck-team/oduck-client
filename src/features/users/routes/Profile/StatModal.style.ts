import styled from "@emotion/styled";

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.typo["body-2-m"]};
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.neutral[60]};
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;
export const Data = styled.span`
  color: ${({ theme }) => theme.colors.primary[60]};
  text-align: right;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;
