import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { history } from "../store/store";

export const Profile = () => {
  const { email, id } = useSelector((state) => state.auth);

  const handleEditPasswordClick = () => {
    history.push(`/${id}/editprofile`);
  };

  return (
    <ProfileContainer>
      <ProfileContentContainer>
        <ProfileImageContainer>
          <ProfileImageWrapper>
            <ProfileImage />
          </ProfileImageWrapper>
          <ProfileNickName>{email}</ProfileNickName>
        </ProfileImageContainer>
        <ProfileMenuContainer>
          <ProfileNav onClick={handleEditPasswordClick}>
            비밀번호 수정하기
          </ProfileNav>
        </ProfileMenuContainer>
      </ProfileContentContainer>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ProfileContentContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 20%;
`;

const ProfileImageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  background: grey;
`;

const ProfileNickName = styled.div``;

const ProfileMenuContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileNav = styled.div`
  width: 60%;
  height: 30px;
  max-width: 300px;
  color: white;
  background: #43a0ff;
  border-radius: 15px;
  margin-top: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
