import styled from "@emotion/styled";
import { useState } from "react";
import { BasicButton } from "../Button/BasicButton";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { editTodoRequest } from "../redux/slice/todoSlice";
import { useParams } from "react-router";

export const EditTask = () => {
  const [priority, setPriority] = useState<number>(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { todoId } = useParams<{ todoId: string }>();

  const dispatch = useDispatch();

  const todoPriorityMap = new Map([
    [0, "보통"],
    [1, "중요"],
    [2, "매우 중요"],
  ]);

  const handleImportance = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriority(parseInt(e.currentTarget.value));
  };

  const onSubmit = ({
    content,
    priority,
  }: {
    content: string;
    priority: number;
  }) => {
    dispatch(editTodoRequest({ todoId, content, priority }));
  };

  return (
    <>
      <AddTaskContainer onSubmit={handleSubmit(onSubmit)}>
        <AddTaskWrapper>
          <InputWrapper>
            <AddTaskInputLabel htmlFor="content">Content</AddTaskInputLabel>
            <AddTaskInput
              type="text"
              id="content"
              {...register("content", { required: true })}
            />
            {errors.todo?.type === "required" &&
              "할 일은 반드시 입력하셔야 합니다."}
          </InputWrapper>
          <InputWrapper>
            <AddTaskSlideLabel htmlFor="priority">Importance</AddTaskSlideLabel>
            {todoPriorityMap.get(priority)}
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
        <BasicButtonWrapper>
          <BasicButton message="Edit" />
        </BasicButtonWrapper>
      </AddTaskContainer>
    </>
  );
};

const AddTaskContainer = styled.form`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
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

const BasicButtonWrapper = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 30px;
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
