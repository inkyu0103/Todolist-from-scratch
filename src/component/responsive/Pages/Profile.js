import styled from "@emotion/styled";
import { LoggedLayout } from "../Layout/LoggedLayout";

export const Profile = () => {
  return (
    <LoggedLayout title="Add a Task">
      <ProfileContainer>난 프로필이여</ProfileContainer>
    </LoggedLayout>
  );
};

const ProfileContainer = styled.div``;
