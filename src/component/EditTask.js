import styled from "@emotion/styled";
import { useState } from "react";
import { BasicButton } from "../Button/BasicButton";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { editTodo } from "../store/actions";
import { useParams } from "react-router";

export const EditTask = () => {
  const [priority, setPriority] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { postId } = useParams();

  const dispatch = useDispatch();

  const priorityState = {
    0: "보통",
    1: "중요",
    2: "매우급함",
  };

  const handleImportance = (e) => {
    setPriority(e.target.value);
  };

  const onSubmit = ({ todo }) => {
    dispatch(editTodo({ todoId: postId, todo, priority }));
  };

  return (
    <>
      <AddTaskContainer onSubmit={handleSubmit(onSubmit)}>
        <AddTaskWrapper>
          <InputWrapper>
            <AddTaskInputLabel htmlFor="todo">Content</AddTaskInputLabel>
            <AddTaskInput
              type="text"
              id="todo"
              {...register("todo", { required: true })}
            />
            {errors.todo?.type === "required" &&
              "할 일은 반드시 입력하셔야 합니다."}
          </InputWrapper>
          <InputWrapper>
            <AddTaskSlideLabel htmlFor="priority">Importance</AddTaskSlideLabel>
            {priorityState[priority]}
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
      </AddTaskContainer>
      <BasicButtonWrapper>
        <BasicButton message="Edit" />
        <BasicButton message="Delete" />
      </BasicButtonWrapper>
    </>
  );
};

const AddTaskContainer = styled.form`
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