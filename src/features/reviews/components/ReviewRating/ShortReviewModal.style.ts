import styled from "@emotion/styled";

import BaseButton from "@/components/Button";

export const Title = styled.h1`
  display: none;
`;

export const ReviewContentSection = styled.div`
  padding-top: 24px;

  & > label {
    ${({ theme }) => theme.typo["body-2-m"]}
    margin-left: 4px;
  }

  & > div {
    margin-top: 8px;
  }

  textarea {
    height: calc(100px * 1.1429);
  }
`;

export const AttractionPointSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  & > label {
    ${({ theme }) => theme.typo["body-2-m"]}
    margin-left: 4px;
  }

  & > p {
    ${({ theme }) => theme.typo["body-3-r"]}
    color: ${({ theme }) => theme.colors.neutral["50"]};
    margin-left: 4px;
  }

  & span {
    color: ${({ theme }) => theme.colors.primary["60"]};
  }
`;

export const AttractionPointList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`;

export const Button = styled(BaseButton)`
  ${({ theme }) => theme.typo["body-2-m"]}
`;
