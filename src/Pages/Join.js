import styled from "@emotion/styled";
import { useState } from "react";
import { UnloggedLayout } from "../Layout/UnloggedLayout";

export const Join = () => {
  const [idState, setIdState] = useState("");
  const [pwState, setPwState] = useState("");
  const [authState, setAuthState] = useState("");

  const handleIdChange = (e) => {
    setIdState(e.target.value);
  };

  const handlePwChange = (e) => {
    setPwState(e.target.value);
  };

  const handleAuthChange = (e) => {
    setAuthState(e.target.value);
  };

  const handleSendAuthCode = () => {
    alert("인증번호를 전송하였습니다.");
  };

  const handleJoinClick = () => {
    alert("회원가입이 완료되었습니다.");
  };

  return (
    <UnloggedLayout title="Join">
      <JoinContainer>
        <JoinInfoWrapper>
          <InputLabel htmlFor="Id">ID</InputLabel>
          <InputDOM id="Id" type="text" onChange={handleIdChange} />

          <InputLabel htmlFor="Pw">Password</InputLabel>
          <InputDOM id="Pw" type="password" onChange={handlePwChange} />

          <InputLabel htmlFor="Auth">인증번호</InputLabel>
          <InputDOM id="Auth" type="text" onChange={handleAuthChange} />
          <ButtonContainer onClick={handleSendAuthCode}>
            인증번호 받기
          </ButtonContainer>
          <ButtonContainer onClick={handleJoinClick}>회원가입</ButtonContainer>
        </JoinInfoWrapper>
      </JoinContainer>
    </UnloggedLayout>
  );
};

const JoinContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const JoinInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 20%;
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
