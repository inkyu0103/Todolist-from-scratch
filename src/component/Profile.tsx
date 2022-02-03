import styled from "@emotion/styled";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { changeProfileImageRequest } from "../redux/slice/authSlice";
import { RootState, history } from "../redux/store";
import { ProfileImage } from "./ProfileImage";

export const Profile = () => {
  const { email, userId, profileImageUrl } = useSelector(
    (state: RootState) => state.authReducer
  );
  const dispatch = useDispatch();

  const handleSignoutClick = () => {
    //dispatch(signOutRequest());
  };

  const handleEditPasswordClick = () => {
    history.push(`/${userId}/editprofile`);
  };

  const handleProfileImage = async (inputRef: any) => {
    const formData: any = new FormData();
    formData.append("image", inputRef.current?.files[0]);
    formData.append("key", process.env.REACT_APP_IMAGE_API_KEY);

    const response: any = await axios.post(
      "https://api.imgbb.com/1/upload",
      formData
    );

    const {
      data: { display_url },
    }: any = response.data;
    dispatch(changeProfileImageRequest({ display_url, userId }));
  };

  return (
    <ProfileContainer>
      <ProfileContentContainer>
        <ProfileImageContainer>
          <ProfileImageWrapper>
            <ProfileImage
              profileImageUrl={profileImageUrl}
              handleProfileImage={handleProfileImage}
            />
          </ProfileImageWrapper>
          <ProfileNickName>{email}</ProfileNickName>
        </ProfileImageContainer>
        <ProfileMenuContainer>
          <ProfileNav onClick={handleEditPasswordClick}>
            비밀번호 수정하기
          </ProfileNav>
          <ProfileNav onClick={handleSignoutClick}>로그아웃</ProfileNav>
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
