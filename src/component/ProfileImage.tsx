import styled from "@emotion/styled";
import { RefObject, useRef } from "react";

interface ProfileImageArgs {
  profileImageUrl: string;
  handleProfileImage: (inputRef: RefObject<HTMLInputElement>) => void;
}

export const ProfileImage = ({
  profileImageUrl,
  handleProfileImage,
}: ProfileImageArgs) => {
  const profileImageRef = useRef<HTMLInputElement>(null);

  return (
    <ProfileImageContainer>
      <ProfileImageTag src={profileImageUrl} alt="profile" />
      <ProfileCustomLabel htmlFor="profile-input" />
      <ProfileCustomInput
        type="file"
        id="profile-input"
        ref={profileImageRef}
        onChange={() => handleProfileImage(profileImageRef)}
      />
    </ProfileImageContainer>
  );
};

const ProfileImageContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  background: grey;
  z-index: 1;
`;

const ProfileImageTag = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

const ProfileCustomInput = styled.input`
  display: none;
`;

const ProfileCustomLabel = styled.label`
  display: inline-block;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  z-index: 3;
  top: 0;
  left: 0;
  cursor: pointer;
`;
