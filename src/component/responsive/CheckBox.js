import styled from "@emotion/styled";

export const CheckBox = ({ isCheck }) => {
  return (
    <CheckBoxContainer>
      <CheckBoxTarget type="checkbox" id="checkbox">
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxTarget>
    </CheckBoxContainer>
  );
};

const CheckBoxContainer = styled.div``;

const CheckBoxTarget = styled.input`
  display: none;
`;

const CheckBoxLabel = styled.label`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 3px solid black;
  position: relative;
`;
