import styled from 'styled-components';

const AddForm = styled.form`
  width: 350px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border: 2px solid black;
  border-radius: 5px;
  label {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }
  input {
    font-size: 16px;
    padding: 5px;
  }
  button {
    cursor: pointer;
    margin-top: 10px;
    padding: 5px;
  }
`;

export default AddForm;
