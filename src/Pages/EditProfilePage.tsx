import { LoggedLayout } from "../Layout/LoggedLayout";
import { EditProfile } from "../component/EditProfile";

export const EditProfilePage = () => {
  return (
    <LoggedLayout title="Edit Profile" goBack>
      <EditProfile />
    </LoggedLayout>
  );
};
