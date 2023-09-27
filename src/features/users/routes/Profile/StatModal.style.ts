import styled from "@emotion/styled";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.typo["body-2-m"]};
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 0 -8px 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.neutral[60]};
`;
export const Data = styled.span`
  color: ${({ theme }) => theme.colors.primary[60]};
`;
