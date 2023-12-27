import styled from "@emotion/styled";

export const AverageRatings = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  margin-top: 24px;
`;

export const AverageRatingsOverview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  & > span {
    font-size: 32px;
    font-weight: 500;
    letter-spacing: -1.6px;
  }
  & > svg {
    color: ${({ theme }) => theme.colors.secondary["50"]};
  }
`;

export const AttractionPoint = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 24px;
  margin-bottom: 8px;

  & > h2 {
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.neutral["50"]};
    ${({ theme }) => theme.typo["body-3-r"]};
    ${({ theme }) => theme.mq("md")} {
      ${({ theme }) => theme.typo["body-2-r"]}
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  gap: 14px;
  align-items: center;
`;

export const AttractionPointLabel = styled.span`
  text-align: right;
  color: ${({ theme }) => theme.colors.neutral["80"]};
  ${({ theme }) => theme.typo["body-3-r"]};
  ${({ theme }) => theme.mq("md")} {
    ${({ theme }) => theme.typo["body-2-r"]}
  }
`;

export const AttractionPointRatio = styled.div`
  ${({ theme }) => theme.typo["body-3-r"]};
  ${({ theme }) => theme.mq("md")} {
    ${({ theme }) => theme.typo["body-2-r"]}
  }
`;
