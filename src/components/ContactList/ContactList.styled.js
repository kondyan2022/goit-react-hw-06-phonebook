import styled from 'styled-components';

const UList = styled.ul`
  list-style: none;
  width: 400px;
  padding-left: 0;

  li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }
  button {
    padding: 2px;
    cursor: pointer;
  }
`;

export default UList;
