import styled from "@emotion/styled";

import Skeleton from "@/components/Skeleton";

export default function RecentReviewLoading() {
  return (
    <RecentReviewLoadingContainer>
      <HeaderContainer>
        <ImageContainer>
          <Skeleton w={60} h={74} />
        </ImageContainer>
        <Skeleton w={"full"} h={74} />
      </HeaderContainer>
      <Skeleton w={"full"} h={80} />
    </RecentReviewLoadingContainer>
  );
}

const RecentReviewLoadingContainer = styled.div`
  padding: 16px 0;
`;

const HeaderContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`;

const ImageContainer = styled.div`
  flex-shrink: 0;
`;
