import styled from "@emotion/styled";

import Skeleton from "@/components/Skeleton";

export default function ImageCardLoading() {
  return (
    <ImageCardLoadingContainer>
      <ImageContainer>
        <Skeleton w={"full"} h={480} />
      </ImageContainer>
      <EvaluationContainer>
        <Skeleton w={55} h={18} wUnit="%" />
        <Skeleton w={35} h={18} />
      </EvaluationContainer>
    </ImageCardLoadingContainer>
  );
}

const ImageCardLoadingContainer = styled.section`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.neutral["05"]};
  margin-bottom: 32px;
`;

const ImageContainer = styled.div`
  width: 100%;
  border-bottom-right-radius: 30px;
  overflow: hidden;
`;

const EvaluationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;
