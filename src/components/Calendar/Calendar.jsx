import * as S from "./Calendar.styled";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

export function Calendar({ selected, setSelected }) {
  return (
    <>
      <S.CalPos>
        <S.Date>Дата</S.Date>
        <S.StyledDayPicker
          mode="single"
          selected={selected}
          onSelect={setSelected}
        />
        <S.P>
          Выберите срок исполнения:
          <span>{selected && format(selected, "dd.MM.yyyy")}</span>
        </S.P>
      </S.CalPos>
    </>
  );
}
