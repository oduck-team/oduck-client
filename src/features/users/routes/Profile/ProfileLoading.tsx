import styled from "@emotion/styled";

import Skeleton from "@/components/Skeleton";

export default function ProfileLoading() {
  return (
    <>
      <ProfileImageContainer>
        <Skeleton w={"full"} h={160} />
        <AvatarContainer>
          <Skeleton w={80} h={80} borderRadius={"full"} />
        </AvatarContainer>
      </ProfileImageContainer>

      <InfoContainer>
        <Skeleton w={100} h={27} />
        <Skeleton w={"full"} h={21} />
      </InfoContainer>

      <StatContainer>
        <Skeleton w={"full"} h={40} />
      </StatContainer>

      <Skeleton w={"full"} h={42} />

      <ListContainer>
        <SortBarContainer>
          <Skeleton w={120} h={21} />
          <Skeleton w={100} h={21} />
        </SortBarContainer>
        <CardContainer>
          <Skeleton w={"full"} h={135} />
          <Skeleton w={"full"} h={135} />
        </CardContainer>
      </ListContainer>
    </>
  );
}

const ProfileImageContainer = styled.div`
  position: relative;
`;

const AvatarContainer = styled.div`
  position: absolute;
  bottom: -40px;
  left: 16px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 48px;
  padding: 0 16px;
`;

const StatContainer = styled.div`
  padding: 16px;
  margin-bottom: 18px;
`;

const ListContainer = styled.div`
  padding: 0 16px;
`;

const SortBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
