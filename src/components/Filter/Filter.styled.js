import styled from 'styled-components';

export const Box = styled.div`
  margin-top: 20px;
`;

export const Label = styled.label`
  margin-right: 30px;
  display: flex;
  justify-content: space-between;
`;

export const InputSearch = styled.input`
  box-sizing: border-box;
  border: 1px solid rgba(33, 33, 33, 0.2);
  outline: none;
  &:hover,
  &:focus {
    border-color: red;
  }
`;
