import styled from "@emotion/styled";

export const ReviewCardWithImageContainer = styled.article`
  padding: 16px;
  margin: 0 -16px;
  border-top: 2px solid ${({ theme }) => theme.colors.neutral[10]};

  &:last-child {
    border-bottom: 2px solid ${({ theme }) => theme.colors.neutral[10]};
  }
`;

export const AnimationConatiner = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

export const Image = styled.img`
  flex-shrink: 0;
  width: 60px;
  height: 74px;
  border-radius: 4px;
  background-color: #d9d9d9;
  margin-right: 8px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 8px;
`;

export const Title = styled.span`
  ${({ theme }) => theme.typo["body-2-m"]}
  color: #66666e;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;
