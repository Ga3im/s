import { useState } from "react";
import * as S from "./Calendar.styled";
import "react-day-picker/dist/style.css";

export function Calendar() {
  const [selected, setSelected] = useState();
  console.log(selected);
  
  return (
    <>
      <S.CalPos>
        <S.Date>Дата</S.Date>
        <S.StyledDayPicker
          mode="single"
          selected={selected}
          onSelect={setSelected}
        />
        <S.P>Выберите срок исполнения:{}</S.P>
      </S.CalPos>
    </>
  );
}
