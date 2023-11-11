import { useQuery } from "@tanstack/react-query";

import Head from "@/components/Head";
import useAuth from "@/features/auth/hooks/useAuth";
import { useApi } from "@/hooks/useApi";

import ProfileImageSection from "../../components/ProfileImageSection";
import ProfileAvatar from "../../components/ProfileImageSection/ProfileAvatar";

import EditForm from "./EditForm";
import ProfileEditLoading from "./ProfileEditLoading";
import { ProfileEditContainer } from "./style";

export default function ProfileEdit() {
  const { user } = useAuth();
  const { profile } = useApi();
  const { isLoading, data: userProfile } = useQuery(
    ["profile", "edit", user?.name],
    () => profile.getProfile(user?.name),
  );

  if (isLoading) return <ProfileEditLoading />;
  return (
    <>
      {userProfile && (
        <ProfileEditContainer>
          <Head title="오덕 | 프로필 수정" />
          <ProfileImageSection>
            <ProfileImageSection.Art src={userProfile.backgroundImage} />
            <ProfileImageSection.ArtEditButton />
            <ProfileImageSection.ProfileAvatar>
              <ProfileAvatar.Avatar
                src={userProfile?.thumbnail}
                userName="FE"
                size="xl"
              />
              <ProfileAvatar.AvatarEditButton />
            </ProfileImageSection.ProfileAvatar>
          </ProfileImageSection>

          <EditForm
            name={userProfile.name}
            description={userProfile.description}
          />
        </ProfileEditContainer>
      )}
    </>
  );
}
