import styled from "styled-components";
import {
  Hover01,
  Hover03,
  paragraph,
  Subttl,
  themeColor,
} from "../../../GlobalStyle.styled";

export const Browse = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
`;

export const BrowseContainer = styled.div`
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

export const BrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.cards};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`;
export const Content = styled.div`
  display: block;
  text-align: left;
`;

export const TopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;
export const H3 = styled.h3`
  color: ${({ theme }) => theme.Title};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const CatTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 1 !important;
 ${({ $color }) => themeColor($color)};
  ${paragraph}
`;

export const Status = styled.div`
  margin-bottom: 11px;
  color: ${({ theme }) => theme.Title};
  ${paragraph}
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 14px;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  padding: 14px 14px 12px;
  margin-right: 7px;
  cursor: pointer;
  margin-bottom: 7px;
  color: #94a6be;
  line-height: 10px;
  font-weight: 400;
  background: ${({ $isClick, $isSelected }) => ($isClick || $isSelected ? "#94A6BE" : "")};
  color: ${({ $isClick, $isSelected }) => ($isClick || $isSelected ? "#FFFFFF" : "")};
`;

export const BrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const BrowseFrom = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
 color: ${({ theme }) => theme.Title};
  font-size: 14px;
  font-weight: 600;
  line-height: 16.41px;

`;
export const TextArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #EAEEF6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 230px;
  background: ${({ theme, $area }) => $area ? '#FFFFFF' : theme.textArea};
  resize: none;

  .form-browse__area::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  .form-browse__area::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;
export const ButtonsBrowse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
`;
export const BtnGroup = styled.div`
  display: flex;
  gap: 8px;
`;
export const BtnBor = styled.button`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;
  padding: 7px 13px 7px 10px;
  p {
    font-weight: 500;
    font-size: 14px;
  }
  ${Hover03}
`;

export const BtnDel = styled.button`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;
  padding: 7px 13px 7px 10px;
  p {
    font-weight: 500;
    font-size: 14px;
  }
  ${Hover03}
`;

export const BtnClose = styled.button`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: #565eef;
  color: #ffffff;
  padding: 7px 13px 7px 10px;
  p {
    font-weight: 500;
    font-size: 14px;
  }
  ${Hover01}
`;

export const ButtonEdit = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
`;
export const BtnSave = styled.button`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: #565eef;
  color: #ffffff;
  padding: 7px 13px 7px 10px;
  p {
    font-weight: 500;
    font-size: 14px;
  }
  ${Hover01}
`;
