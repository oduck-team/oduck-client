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
