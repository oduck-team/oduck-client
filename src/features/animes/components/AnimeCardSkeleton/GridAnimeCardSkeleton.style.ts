import styled from "@emotion/styled";

export const GridAnimeCardSkeletonContainer = styled.div`
  width: calc(50% - 4px);
  &:nth-of-type(odd) {
    margin-right: 8px;
  }

  ${({ theme }) => theme.mq("sm")} {
    width: calc(33% - 4px);
    &:nth-of-type(odd) {
      margin-right: 0;
    }
    &:not(:nth-of-type(3n)) {
      margin-right: 8px;
    }
  }
`;
