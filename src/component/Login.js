import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signInRequest } from "../store/actions/index";
import { UnloggedLayout } from "../Layout/UnloggedLayout";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = ({ email, password }) => {
    dispatch(signInRequest({ email, password }));
  };

  return (
    <LoginContainer>
      <JoinForm onSubmit={handleSubmit(onSubmit)}>
        <IdLabel htmlFor="email">ID</IdLabel>
        <IdInput
          id="email"
          type="text"
          name="email"
          autoComplete="off"
          {...register("email", { required: true })}
        />
        {errors.email?.type === "required" &&
          "이메일은 반드시 입력하셔야 합니다."}

        <PwLabel htmlFor="password">Password</PwLabel>
        <PwInput
          id="password"
          type="password"
          name="password"
          {...register("password", { required: true })}
        />
        {errors.password?.type === "required" &&
          "비밀번호는 반드시 입력하셔야 합니다"}

        <ButtonContainer>로그인</ButtonContainer>
      </JoinForm>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const JoinForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const IdLabel = styled.label`
  width: 60%;
  max-width: 400px;
`;
const PwLabel = styled.label`
  width: 60%;
  max-width: 400px;
`;

const IdInput = styled.input`
  display: block;
  width: 60%;
  max-width: 400px;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
`;

const PwInput = styled.input`
  display: block;
  width: 60%;
  max-width: 400px;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
`;

const ButtonContainer = styled.button`
  outline: none;
  border: none;
  width: 60%;
  height: 30px;
  max-width: 400px;
  color: white;
  background: #43a0ff;

  margin-top: 10px;
`;
