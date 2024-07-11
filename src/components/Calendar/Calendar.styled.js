import { DayPicker } from "react-day-picker";
import styled from "styled-components";

export const StyledDayPicker = styled(DayPicker)`
   color: #94A6BE;
   --rdp-cell-size: 30px;
   margin: 0px;

   .rdp-day_today:not(.rdp-day_outside) {
    font-weight: bold;
    background: #94A6BE;
    color: #ffffff;
}
.rdp-caption_label {
    font-size: 14px;
}
.rdp-tbody {
    font-size: 10px;
}
`
export const Date = styled.p`
font-weight: 600;
font-size: 14px;
line-height: 16.41px;
font-weight: bold;
`

export const CalPos = styled.div`
    display: flex;
    gap: 14px;
    flex-direction: column;
    margin: 20px
`

export const P = styled.p`
font-size: 10px;
line-height: 11.72px;
color: #94A6BE;
`