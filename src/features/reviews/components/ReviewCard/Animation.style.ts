import styled from "@emotion/styled";

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

export const Title = styled.h1`
  ${({ theme }) => theme.typo["body-2-m"]};
  color: ${({ theme }) => theme.colors.neutral[70]};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;
