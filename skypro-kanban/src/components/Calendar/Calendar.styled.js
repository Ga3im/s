import styled from "styled-components";

export const Calendar = styled.div`
width: 100%;
`

export const CalTtl = styled.p`
 margin-bottom: 14px;
 padding: 0 7px;
 
 .subttl {
  color: #000;
  font-size: 14px;
  font-weight: 600;
 }
`

export const CalNav = styled.div`
 width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;
`

export const CalMonth = styled.div`
color: #94A6BE;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`

export const NavActions = styled.div`
display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavAction = styled.div`
 width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
  fill: #94A6BE;
}
`

export const CalPeriod = styled.div`
padding: 0;

.calendar__p {
    font-size: 14px;
  }
`