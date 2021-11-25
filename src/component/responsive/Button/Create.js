import styled from "@emotion/styled";

export const Create = () => {
  return <CreateContainer></CreateContainer>;
};

const CreateContainer = styled.div`
  @media (max-width: 767px) {
    width: 80%;
    height: 40px;
    background: green;
  }

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
    background: green;
  }
`;

const CreateButton = styled.button`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
`;
