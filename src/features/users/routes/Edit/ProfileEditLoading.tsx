import styled from "@emotion/styled";

import Skeleton from "@/components/Skeleton";

export default function ProfileEditLoading() {
  return (
    <>
      <ProfileImageContainer>
        <Skeleton w={"full"} h={160} />
        <AvatarContainer>
          <Skeleton w={80} h={80} borderRadius={"full"} />
        </AvatarContainer>
      </ProfileImageContainer>

      <FormContainer>
        <Form>
          <InputContainer>
            <Skeleton w={55} h={24} />
            <Skeleton w={"full"} h={40} />
          </InputContainer>

          <InputContainer>
            <Skeleton w={55} h={24} />
            <Skeleton w={"full"} h={60} />
          </InputContainer>
        </Form>
        <ButtonContainer>
          <Skeleton w={"full"} h={40} />
          <Skeleton w={"full"} h={40} />
        </ButtonContainer>
      </FormContainer>
    </>
  );
}

const ProfileImageContainer = styled.div`
  position: relative;
  margin-bottom: 60px;
`;

const AvatarContainer = styled.div`
  position: absolute;
  bottom: -40px;
  left: 16px;
`;

const FormContainer = styled.div`
  --profile-art-height: 160px; // 160px
  --bottom-navigation-height: 74px; // 66px + 8px
  --margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(
    100vh - var(--profile-art-height) - var(--bottom-navigation-height) -
      var(--margin-top)
  );
  padding: 0px 16px;
  margin-top: var(--margin-top);
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
