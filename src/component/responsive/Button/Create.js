import styled from "@emotion/styled";
import plus from "../../../assets/images/plus.png";

export const Create = () => {
  return (
    <CreateContainer image={plus}>
      <CreateButton>
        <CreateSpan>Add a Task</CreateSpan>
      </CreateButton>
    </CreateContainer>
  );
};

const CreateContainer = styled.div`
  @media (max-width: 767px) {
    width: 80%;
    height: 40px;
    background: #25c06e;
    position: fixed;
    bottom: 30px;
    border-radius: 15px;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #33bf75;
    position: absolute;
    bottom: 30px;
    right: 50px;
    background-image: ${({ image }) => `url("${image}")`};
    background-repeat: no-repeat;
  }
`;

const CreateSpan = styled.span`
  color: white;

  @media (min-width: 768px) {
    display: none;
  }
`;

const CreateButton = styled.button`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background-color: transparent;
`;
