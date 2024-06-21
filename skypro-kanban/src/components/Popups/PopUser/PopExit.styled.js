import styled from "styled-components";
import { ButtonNewTask } from "../../Header/Header.styled";

export const PopExitContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  
`

export const PopExitBlock = styled.div`
  background-color: #FFFFFF;
  max-width: 370px;
  width: 100%;
  padding: 50px 20px  ;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`

export const PopExitGroup = styled.div`
 width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ButtonExitYes = styled(ButtonNewTask)`
   width: 153px;
   height: 30px;
`
export const ButtonExitNo = styled(ButtonNewTask)`
   width: 153px;
   height: 30px;

   &:hover{
    background-color: #33399b;
    color: #FFFFFF;
   }
`