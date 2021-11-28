import styled from "@emotion/styled";
import { useState } from "react";
import { Add } from "../Button/Add";
import { LoggedLayout } from "../Layout/LoggedLayout";

export const AddTask = () => {
  const [content, setContent] = useState("");
  const [importance, setImportance] = useState(1);
  const state = {
    0: "보통",
    1: "중요",
    2: "매우급함",
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const handleImportance = (e) => {
    setImportance(e.target.value);
  };

  const handleCreateClick = (e) => {
    alert("게시물이 저장되었습니다.");
  };

  return (
    <LoggedLayout title="Add a Task">
      <AddTaskContainer>
        <AddTaskWrapper>
          <InputWrapper>
            <AddTaskInputLabel htmlFor="input">Content</AddTaskInputLabel>
            <AddTaskInput type="text" id="input" onChange={handleContent} />
          </InputWrapper>
          <InputWrapper>
            <AddTaskSlideLabel htmlFor="slide">Importance</AddTaskSlideLabel>
            {state[importance]}
            <AddTaskSlide
              type="range"
              min="0"
              max="2"
              id="slide"
              defaultValue="1"
              onChange={handleImportance}
            />
          </InputWrapper>
        </AddTaskWrapper>
        <Add handleCreateClick={handleCreateClick} />
      </AddTaskContainer>
    </LoggedLayout>
  );
};

const AddTaskContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`;

const AddTaskWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 50px;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const AddTaskInputLabel = styled.label`
  width: 60%;
  max-width: 400px;
`;

const AddTaskInput = styled.input`
  width: 60%;
  max-width: 400px;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
  display: block;
  padding-top: 20px;
`;

const AddTaskSlideLabel = styled.label`
  width: 60%;
  max-width: 400px;
`;

const AddTaskSlide = styled.input`
  width: 60%;
  max-width: 400px;
  background-color: red;
  display: block;
  margin-top: 40px;
`;
