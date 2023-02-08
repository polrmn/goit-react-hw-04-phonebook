import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: baseline;
    padding: 20px;
    border: 1px solid black;
    background-color: cornflowerblue;
    color: #fff;
    font-family: inherit;
    font-size: 24px;
`;

export const Input = styled.input`
    font-family: inherit;
    font-size: 18px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const Button = styled.button`
  padding: 8px;
  margin-left: 32px;
  font-size: 18px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  &:hover {
    box-shadow: rgba(100, 149, 237, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;