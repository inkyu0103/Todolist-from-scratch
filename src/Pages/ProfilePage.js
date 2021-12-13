import { LoggedLayout } from "../Layout/LoggedLayout";
import { Profile } from "../component/Profile";

export const ProfilePage = () => {
  return (
    <LoggedLayout title="Profile" goBack>
      <Profile />
    </LoggedLayout>
  );
};
