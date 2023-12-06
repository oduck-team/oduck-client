import styled from "@emotion/styled";

import Skeleton from "@/components/Skeleton";

/** 애니 이미지가 포함된 리뷰카드의 스켈레톤 */
export default function ReviewCardSkeleton() {
  return (
    <ReviewCardSkeletonContainer>
      <AnimeContainer>
        <ImageContainer>
          <Skeleton w={60} h={74} />
        </ImageContainer>
        <div>
          <TitleContainer>
            <Skeleton w={150} h={21} />
          </TitleContainer>
          <Skeleton w={70} h={22} />
        </div>
      </AnimeContainer>
      <CommentContainer>
        <Skeleton w={200} h={21} />
      </CommentContainer>
      <Skeleton w={70} h={18} />
    </ReviewCardSkeletonContainer>
  );
}

const ReviewCardSkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 167px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[10]};
  margin: 0 -16px;
  padding: 16px;
`;

const AnimeContainer = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const ImageContainer = styled.div`
  margin-right: 8px;
`;

const TitleContainer = styled.div`
  margin-bottom: 20px;
`;

const CommentContainer = styled.div`
  margin-bottom: 8px;
`;
