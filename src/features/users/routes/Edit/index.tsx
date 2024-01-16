import { useQuery } from "@tanstack/react-query";

import Head from "@/components/Head";
import useAuth from "@/features/auth/hooks/useAuth";
import { useApi } from "@/hooks/useApi";

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
          <EditForm {...userProfile} />
        </ProfileEditContainer>
      )}
    </>
  );
}
