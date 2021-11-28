import styled from "@emotion/styled";
import plus from "../../../assets/images/plus.png";

export const Create = ({ handleCreateClick }) => {
  return (
    <CreateContainer onClick={handleCreateClick}>
      <CreateButton image={plus}>
        <CreateSpan>Add a task</CreateSpan>
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
    width: 60px;
    height: 60px;
    background: #25c06e;
    position: fixed;

    bottom: 30px;
    right: 60px;
    border-radius: 50%;
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
  background: none;
`;
