import styled from "@emotion/styled";
//import plus from "../../../assets/images/plus.png";

export const Add = ({ handleCreateClick }) => {
  return (
    <AddContainer onClick={handleCreateClick}>
      <AddButton>
        <AddSpan>Create a Task</AddSpan>
      </AddButton>
    </AddContainer>
  );
};

const AddContainer = styled.div`
  width: 50%;
  max-width: 400px;
  height: 40px;
  background: #25c06e;
  position: fixed;
  bottom: 30px;
  border-radius: 15px;
`;

const AddSpan = styled.span`
  color: white;
`;

const AddButton = styled.button`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
`;
