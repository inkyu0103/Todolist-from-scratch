import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { LoggedLayout } from "../Layout/LoggedLayout";
import { changePasswordRequest } from "../store/actions";
import { useSelector } from "react-redux";

export const EditProfile = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { userId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onSubmit = ({ current, changed }) => {
    dispatch(changePasswordRequest({ id:userId, current, changed }));
  };

  return (
    <LoggedLayout title="Edit Profile" goBack>
      <EditProfileContainer>
        <EditProfileForm onSubmit={handleSubmit(onSubmit)}>
          <PasswordLabel htmlFor="current">현재 비밀번호</PasswordLabel>
          <PasswordInput
            type="password"
            id="current"
            name="current"
            {...register("current", { required: true })}
          />
          {errors.current?.type === "required" &&
            "현재 비밀번호를 입력해주세요"}
          <PasswordLabel htmlFor="changed">바꿀 비밀번호</PasswordLabel>
          <PasswordInput
            type="password"
            id="changed"
            name="changed"
            {...register("changed", { required: true })}
          />
          {errors.changed?.type === "required" &&
            "바꾸고자 할 비밀번호를 입력해주세요"}

          <button>변경</button>
        </EditProfileForm>
      </EditProfileContainer>
    </LoggedLayout>
  );
};

const EditProfileContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const EditProfileForm = styled.form``;

const PasswordLabel = styled.label``;

const PasswordInput = styled.input`
  display: block;
  width: 60%;
  max-width: 400px;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
`;
