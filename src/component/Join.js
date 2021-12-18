import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signUpRequest } from "../store/actions/index";

export const Join = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = ({ email, password }) => {
    console.log(email, password);
    dispatch(signUpRequest({ email, password }));
  };

  return (
    <JoinContainer>
      <JoinForm onSubmit={handleSubmit(onSubmit)}>
        <InputLabel htmlFor="email">email</InputLabel>
        <InputDOM
          id="email"
          type="text"
          name="email"
          {...register("email", { required: true })}
        />
        {errors.email?.type === "required" &&
          "이메일은 반드시 입력하셔야 합니다."}

        <InputLabel htmlFor="password">Password</InputLabel>
        <InputDOM
          id="password"
          type="password"
          name="password"
          {...register("password", { required: true })}
        />
        {errors.password?.type === "required" &&
          "비밀번호는 반드시 입력하셔야 합니다"}

        <InputLabel htmlFor="Auth">인증번호</InputLabel>
        <InputDOM id="Auth" type="text" />
        <ButtonContainer>회원가입</ButtonContainer>
      </JoinForm>
    </JoinContainer>
  );
};

const JoinContainer = styled.div`
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

const InputLabel = styled.label`
  width: 60%;
  max-width: 400px;
  display: block;
`;

const InputDOM = styled.input`
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
