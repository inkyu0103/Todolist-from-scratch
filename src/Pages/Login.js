import styled from "@emotion/styled";
import { useState } from "react";
import { UnloggedLayout } from "../Layout/UnloggedLayout";

export const Login = () => {
  const [idState, setIdState] = useState("");
  const [pwState, setPwState] = useState("");

  const handleIdChange = (e) => {
    setIdState(e.target.value);
  };

  const handlePwChange = (e) => {
    setPwState(e.target.value);
  };

  const handleLoginClick = (e) => {
    alert("로그인에 성공하였습니다.");
  };

  const handleJoinClick = (e) => {
    alert("회원가입으로 이동합니다.");
  };

  return (
    <UnloggedLayout title="Login">
      <LoginContainer>
        <LoginInfoWrapper>
          <IdLabel htmlFor="Id">ID</IdLabel>
          <IdInput id="Id" type="text" onChange={handleIdChange} />
          <PwLabel htmlFor="Pw">Password</PwLabel>
          <PwInput id="Pw" type="password" onChange={handlePwChange} />

          <ButtonContainer onClick={handleLoginClick}>로그인</ButtonContainer>
          <ButtonContainer onClick={handleJoinClick}>회원가입</ButtonContainer>
        </LoginInfoWrapper>
      </LoginContainer>
    </UnloggedLayout>
  );
};

const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const LoginInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 20%;
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
