import styled from "styled-components";

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  padding: 8px;
  color: #fff;

  border-radius: 20px;
  font-size: 24px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
`;

export const ButtonDelete = styled.button`
  padding: 4px;
  font-size: 16px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  &:hover {
    box-shadow: rgba(255, 0, 0, 0.7) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    color: #fff;
  }
`;



// background-color: rgb(100, 149, 237);