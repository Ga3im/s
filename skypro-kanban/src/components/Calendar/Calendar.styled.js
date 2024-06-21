import styled from "styled-components";
import { CalenarStyle } from "../../GlobalStyle.styled";

export const Calendar = styled.div`
 width: 100%;

 ${CalenarStyle}
`

export const CalendarTtl = styled.p`
margin-bottom: 14px;
padding: 0 7px;

.subttl {
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
}
`

export const CalendarBlock = styled.div`
display: block;
`

export const CalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;
`

export const CalendarMonth = styled.div`
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
`

export const CalendarContent = styled.div`
margin-bottom: 12px;
`

export const CalendarDays = styled.div`
display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`

export const CalendarDay = styled.div`
color: #94A6BE;
font-size: 14px;
`

export const CalendarSells = styled.div`
width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;
`

export const CalendarCell = styled.div`
    width: 42px;
    height: 42px;
    font-size: 14px;
`
export const OtherMonth = styled(CalendarCell)`
        opacity: 0;
`

export const CalendarPeriod = styled.div`
padding: 0 7px;
`

export const CalendarP = styled.p`
 color: #94A6BE;
  font-size: 10px;
  line-height: 1;

  span {
  color: #000000;
}
`