import styled from "@emotion/styled";

import Skeleton from "@/components/Skeleton";

export default function AnimeSlideLoading() {
  return (
    <AnimeSlideLoadingContainer>
      <Skeleton w={150} h={27} />
      <ListContainer>
        {Array.from({ length: 4 }, (_, index) => (
          <ItemContainer key={index}>
            <Skeleton w={160} h={110} borderRadius={5} />
            <Skeleton w={160} h={44} />
          </ItemContainer>
        ))}
      </ListContainer>
    </AnimeSlideLoadingContainer>
  );
}

const AnimeSlideLoadingContainer = styled.div`
  padding-left: 16px;
  margin-bottom: 32px;
`;

const ListContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
  overflow-x: auto;
  -ms-overflow-style: none; /* 익스플로러, 앳지 */
  scrollbar-width: none; /* 파이어폭스 */

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
