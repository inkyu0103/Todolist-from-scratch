import styled from "@emotion/styled";

interface ProfileImageArgs {
  profileImageUrl: string;
}

export const ProfileImage = ({ profileImageUrl }: ProfileImageArgs) => {
  return (
    <ProfileImageContainer>
      <img src={profileImageUrl} alt="profile" width="100%" height="100%" />
      <ProfileCustomLabel htmlFor="profile-input" />
      <ProfileCustomInput type="file" id="profile-input" />
    </ProfileImageContainer>
  );
};

const ProfileImageContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  background: grey;
`;

const ProfileCustomInput = styled.input`
  display: none;
`;

const ProfileCustomLabel = styled.label`
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
