import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { changePasswordRequest } from "../redux/slice/authSlice";
import { useSelector } from "react-redux";
import { BasicButton } from "../Button/BasicButton";
import { RootState } from "../redux/store";
import { useEditTodoMutation } from "../query/todo";

export const EditProfile = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const userId = useSelector((state: RootState) => state.authReducer.userId);
  const dispatch = useDispatch();

  const { mutate } = useEditTodoMutation();

  const onSubmit = ({
    current,
    changed,
  }: {
    current: string;
    changed: string;
  }) => {
    dispatch(
      changePasswordRequest({
        id: userId,
        currentPassword: current,
        changedPassword: changed,
      })
    );
  };

  return (
    <EditProfileContainer>
      <EditProfileForm onSubmit={handleSubmit(onSubmit)}>
        <EditInputWrapper>
          <PasswordLabel htmlFor="current">현재 비밀번호</PasswordLabel>
          <PasswordInput
            type="password"
            id="current"
            //name="current"
            {...register("current", { required: true })}
          />
          {errors.current?.type === "required" && (
            <p>현재 비밀번호를 입력해주세요</p>
          )}
        </EditInputWrapper>
        <EditInputWrapper>
          <PasswordLabel htmlFor="changed">설정할 비밀번호</PasswordLabel>
          <PasswordInput
            type="password"
            id="changed"
            //name="changed"
            {...register("changed", { required: true })}
          />
          {errors.changed?.type === "required" && (
            <p>설정할 비밀번호를 입력해주세요</p>
          )}
        </EditInputWrapper>

        <BasicButton message="Change Password" />
      </EditProfileForm>
    </EditProfileContainer>
  );
};

const EditProfileContainer = styled.main`
  width: 100%;
  height: 100%;
`;

const EditProfileForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EditInputWrapper = styled.div`
  width: 60%;
  max-width: 400px;
  margin-bottom: 30px;
`;

const PasswordLabel = styled.label`
  width: 60%;
  max-width: 400px;
`;

const PasswordInput = styled.input`
  display: block;
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
`;
