import styled from 'styled-components';

export const Contact = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.div`
  cursor: pointer;
  text-align: center;
  width: 50px;
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
  margin-left: 30px;
  background-color: rgba(33, 33, 33, 0.2);
`;
