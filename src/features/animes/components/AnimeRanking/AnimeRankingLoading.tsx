import styled from "@emotion/styled";

import Skeleton from "@/components/Skeleton";

export default function AnimeRankingLoading() {
  return (
    <AnimeRankingLoadingContainer>
      <Skeleton w={"full"} h={276} borderRadius={5} />
      <SliderContainer>
        {Array.from({ length: 5 }, (_, index) => (
          <ItemContainer key={index}>
            <Skeleton w={95} h={95} borderRadius={5} />
            <Skeleton w={95} h={36} />
          </ItemContainer>
        ))}
      </SliderContainer>
    </AnimeRankingLoadingContainer>
  );
}

const AnimeRankingLoadingContainer = styled.div`
  padding: 0 16px;
  width: 100%;
`;

const SliderContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
