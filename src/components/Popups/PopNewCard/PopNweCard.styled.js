import styled from "styled-components";
import { Green, Hover01, Orange, Purple } from "../../../GlobalStyle.styled";

export const PopNewCard = styled.div`
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
`
export const NewCardContainer = styled.div`
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

export const NewCardBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  position: relative;
`
export const NewCardContent = styled.div`
 display: block;
 text-align: left;

 h3{
    color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
 }
`

export const BtnClose = styled.button`
 position: absolute;
  top: 20px;
  right: 30px;
  color: #94A6BE;
  cursor: pointer;
  border: none;
  background: none;
`

export const NewCardWrap = styled.div`
 display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const NewCardForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`

export const NewBlock = styled.div`
 display: flex;
 flex-direction: column;
`
export const Label = styled.label`
 color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`

export const NewInput = styled.input`
 width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin: 20px 0;

  &::placeholder {
  font-weight: 400;
  font-size: 14px;
  line-height: 1px;
  color: #94A6BE;
  letter-spacing: -0.14px;
  }
  &::-moz-placeholder {
  font-weight: 400;
  font-size: 14px;
  line-height: 1px;
  color: #94A6BE;
  letter-spacing: -0.14px;
}
`

export const TextArea = styled.textarea`
  max-width: 370px;
  margin-top: 14px;
  height: 200px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
 
  &::placeholder {
  font-weight: 400;
  font-size: 14px;
  line-height: 1px;
  color: #94A6BE;
  letter-spacing: -0.14px;
}
  &::-moz-placeholder {
  font-weight: 400;
  font-size: 14px;
  line-height: 1px;
  color: #94A6BE;
  letter-spacing: -0.14px;
}
`

export const Categorios = styled.div`
p{
  margin-bottom: 14px;
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
}
`

export const CatTheme = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`
export const CatOrange = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
 opacity: 1 !important;
 background-color: #FFE4C2;
 P{
    font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
    ${Orange}
 }
`
export const CatGreen = styled.div`
 background-color: #B4FDD1;
 color: #06B16E;
 display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  p{
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
    ${Green}
  }
`
export const CatPurple = styled.div`
 display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
background-color: #E9D4FF;
p{
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
    ${Purple}
}
`

export const BtnNewCreate = styled.button`
 width: 132px;
  height: 30px;
  background-color: #565EEF;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #FFFFFF;
  float: right;

  ${Hover01}
`