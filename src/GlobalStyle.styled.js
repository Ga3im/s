import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*:before,
*:after {
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
  outline: none;
}

ul li {
  list-style: none;
} 

html,
body {
  width: 100%;
  height: 100%;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  color: #000000;
}
`
export const ErMes = styled.p`
    text-align: center;
    padding-top: 40px;
`

export const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: ${({theme})=> theme.wrapper};
`
export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`
export const themeColor = ($color) => css`
 ${$color === "Web Design" &&  Orange};
  ${$color === "Copywriting" &&  Purple};
  ${$color === "Research" &&  Green};
  ${!$color &&  Gray};
`

export const Hover01 = css`
    &:hover {background-color: #33399b;}
`

export const Hover02 = css`
     &:hover {color: #33399b;
     &::after{
      border-left-color: #33399b;
      border-bottom-color: #33399b;
     }}
`

export const Hover03 = css`
   &:hover{ 
    background-color: #33399b;
    color: #FFFFFF;
}
`
export const Orange = css`
    background-color: ${({theme}) => theme.orangeBg};
    color: ${({theme}) => theme.orangeText};
`

export const Green = css`
    background-color: ${({theme}) => theme.greenBg};
    color: ${({theme}) => theme.greenText};
`

export const Purple = css`
    background-color:${({theme}) => theme.purpleBg};
    color: ${({theme}) => theme.purpleText};
`

export const Gray = css`
    background: #94A6BE;
    color: #FFFFFF;
`
export const CalenarStyle = css`
 width: 182px;
 margin-bottom: 20px;
`

export const Subttl = css`
  color: ${({ theme }) => theme.Title};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`

export const Loader1 = styled.div`
width:82px;
height: 20px;
padding: 5px 14px;
border-radius: 18px;
background: linear-gradient(45deg, #c1cddc 0%, #e9eef7 100%)
`

export const Loader2 = styled.div`
width:18px;
height: 4px;
background: linear-gradient(45deg, #c1cddc 0%, #e9eef7 100%)
`

export const Loader3 = styled.div`
width:113px;
height: 13px;
background: linear-gradient(45deg, #c1cddc 0%, #e9eef7 100%)
`

export const Loader4 = styled.div`
width:58px;
height: 13px;
background: linear-gradient(45deg, #c1cddc 0%, #e9eef7 100%)
`

export const paragraph = css`
  font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
`