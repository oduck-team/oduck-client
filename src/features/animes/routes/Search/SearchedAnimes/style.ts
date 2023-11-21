import styled from "@emotion/styled";

export const SearchedAnimesContainer = styled.ul`
  display: flex;
  gap: 32px 0;
  flex-wrap: wrap;
`;

export const SkeletonContainer = styled.div`
  display: flex;
  width: calc(50% - 4px);
  &:nth-child(odd) {
    margin-right: 8px;
  }

  ${({ theme }) => theme.mq("sm")} {
    width: calc(33% - 4px);
    &:nth-child(odd) {
      margin-right: 0;
    }
    &:not(:nth-child(3n)) {
      margin-right: 8px;
    }
  }
`;
