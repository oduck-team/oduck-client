import styled from "@emotion/styled";

import Skeleton from "@/components/Skeleton";

export default function AnimeCarouselLoading() {
  return (
    <AnimeCarouselLoadingContainer>
      <Skeleton w={"full"} h={"full"} borderRadius={10} />
    </AnimeCarouselLoadingContainer>
  );
}

const AnimeCarouselLoadingContainer = styled.div`
  width: 100%;
  height: 545px;
  background-color: ${({ theme }) => theme.colors.neutral["10"]};
  padding: 24px 16px;
`;
