import styled from "styled-components";
import { Orange } from "../../../GlobalStyle.styled";

export const Browse = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
`

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
`

export const BrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  position: relative;
`
export const Content = styled.div`
 display: block;
 text-align: left;
`

export const TopBlock = styled.div`
 display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;

  .h3{
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
  }
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

export const Status = styled.div`
  margin-bottom: 11px;
  p{
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 14px;
  }
`

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94A6BE;
  padding: 12px 14px 0px;
  margin-right: 7px;
  margin-bottom: 7px;
`

export const BrowseWrap = styled.div`
 display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const BrowseFrom = styled.form`
 max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`

export const FormBlock = styled.div`
display: flex;
flex-direction: column;
`