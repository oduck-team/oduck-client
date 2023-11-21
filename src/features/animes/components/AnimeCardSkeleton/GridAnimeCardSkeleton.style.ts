import styled from "@emotion/styled";

export const GridAnimeCardSkeletonContainer = styled.div`
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
