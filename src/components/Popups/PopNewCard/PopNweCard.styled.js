import styled from "styled-components";
import {
  Green,
  Hover01,
  Orange,
  Purple,
  themeColor,
} from "../../../GlobalStyle.styled";

export const PopNewCard = styled.div`
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
`;
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
`;

export const NewCardBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.cards};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`;
export const NewCardContent = styled.form`
  display: block;
  text-align: left;

  h3 {
    color: ${({ theme }) => theme.Title};
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 20px;
  }
`;

export const BtnClose = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94a6be;
  cursor: pointer;
  border: none;
  background: none;
`;

export const NewCardWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const NewCardForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const NewBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  color: ${({ theme }) => theme.Title};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

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
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

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
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const Categorios = styled.p`
  margin-bottom: 14px;
  color: ${({ theme }) => theme.Title};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const CatThemeForm = styled.form`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 14px;
`;
export const CatButton = styled.p`
  display: inline-block;
  width: 120px;
  height: 30px;
  padding: 8px 20px;
  text-align: center;
  border-radius: 24px;
  margin-right: 7px;
  font-size: 14px;
  cursor: pointer;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.4)};

  ${({ $color }) => themeColor($color)}
`;
export const CatGreen = styled.input`
  background-color: #b4fdd1;
  color: #06b16e;
  display: inline-block;
  width: 100px;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  border: none;
  cursor: pointer;
  outline: 0;
  outline-offset: 0;
  &::placeholder {
    ${Green}
  }
`;
export const CatPurple = styled.input`
  display: inline-block;
  width: 115px;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  border: none;
  background-color: #e9d4ff;
  outline: 0;
  outline-offset: 0;
  cursor: pointer;
  &::placeholder {
    ${Purple}
  }
`;

export const BtnNewCreate = styled.button`
  width: 132px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  float: right;

  ${Hover01}
`;
export const errorMes = styled.p`
  padding-top: 25px;
  color: red;
`;
// export const InputError = css`
// border: solid 2px red;
// `
