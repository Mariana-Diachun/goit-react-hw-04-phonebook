import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormWrap = styled(Form)`
  border: 1px solid black;
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled(Field)`
  box-sizing: border-box;
  width: 220px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  outline: none;
  &:hover,
  &:focus {
    border-color: red;
  }
  padding: 2px;
`;

export const Label = styled.label`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.17;
  letter-spacing: 0.01em;
  margin-top: 10px;
`;

export const Alert = styled(ErrorMessage)`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  color: red;
`;

export const Button = styled.button`
  border: none;
  margin-top: 30px;
  padding: 5px;
  font-weight: 500;
  font-size: 10px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  background-color: rgba(33, 33, 33, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  &:hover,
  &:focus {
    background-color: red;
  }
  cursor: pointer;
  width: 100px;
`;
