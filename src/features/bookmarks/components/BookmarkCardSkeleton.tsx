import styled from "@emotion/styled";

import Skeleton from "@/components/Skeleton";

export default function BookmarkCardSkeleton() {
  return (
    <BookmarkCardSkeletonContainer>
      <ImageContainer>
        <Skeleton w={80} h={100} />
      </ImageContainer>
      <InfoContainer>
        <TitleContainer>
          <Skeleton w={160} h={21} />
        </TitleContainer>
        <RatingContainer>
          <Skeleton w={120} h={18} />
        </RatingContainer>
        <Skeleton w={60} h={16} />
      </InfoContainer>
    </BookmarkCardSkeletonContainer>
  );
}

const BookmarkCardSkeletonContainer = styled.div`
  display: flex;
  align-items: center;
  height: 132px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[10]};
  margin: 0 -16px;
  padding: 0 16px;
`;

const ImageContainer = styled.div`
  flex-shrink: 0;
`;

const InfoContainer = styled.div`
  padding: 16px 0;
  margin-left: 8px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  margin-bottom: 28px;
`;

const RatingContainer = styled.div`
  margin-bottom: 10px;
`;
