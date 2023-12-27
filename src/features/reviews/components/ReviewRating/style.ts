import styled from "@emotion/styled";

export const ReviewRecommend = styled.div`
  margin-top: 16px;
  width: 100%;

  & > button {
    ${({ theme }) => theme.typo["body-2-r"]}
    display: flex;
    height: 100px;
    width: 100%;
    padding: 8px 16px;
    color: ${({ theme }) => theme.colors.neutral["50"]};
    background-color: ${({ theme }) => theme.colors.neutral["05"]};
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
`;

export const EvaluationRecommend = styled.span`
  ${({ theme }) => theme.typo["micro-r"]};
  color: ${({ theme }) => theme.colors.neutral["60"]};
`;

export const UserReview = styled.div`
  width: 100%;
  padding: 12px 0px 10px;

  h3 {
    margin-bottom: 10px;
  }

  h3,
  p {
    ${({ theme }) => theme.typo["body-2-r"]};
  }

  button {
    all: unset;
    ${({ theme }) => theme.typo["body-2-r"]};
    color: ${({ theme }) => theme.colors["neutral"]["80"]};
    cursor: pointer;
  }
`;

export const Content = styled.p`
  color: ${({ theme }) => theme.colors["neutral"]["80"]};
  margin-top: 10px;
  word-break: break-all;

  &.ellipsis {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
`;
