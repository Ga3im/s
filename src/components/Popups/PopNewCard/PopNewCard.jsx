import { Calendar } from "../../Calendar/Calendar";
import { Link } from "react-router-dom";
import * as S from "./PopNweCard.styled";
import { routes } from "../../../router/routes";


export const PopNewCard = () => {
  return (
    <S.PopNewCard id="popNewCard">
      <S.NewCardContainer>
        <S.NewCardBlock>
          <S.NewCardContent>
            <h3>Создание задачи</h3>
            <Link to={routes.main}>
            <S.BtnClose>
              &#10006;
            </S.BtnClose>           
            </Link>
            <S.NewCardWrap>
              <S.NewCardForm
                id="formNewCard">
                <S.NewBlock>
                  <S.Label>
                    Название задачи
                  </S.Label>
                  <S.NewInput
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </S.NewBlock>
                <S.NewBlock>
                  <S.Label htmlFor="textArea">
                    Описание задачи
                  </S.Label>
                  <S.TextArea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></S.TextArea>
                </S.NewBlock>
              </S.NewCardForm>
              <Calendar />
            </S.NewCardWrap>
            <S.Categorios>
              <p>Категория</p>
              <S.CatTheme>
                <S.CatOrange >
                  <p>Web Design</p>
                </S.CatOrange>
                <S.CatGreen>
                  <p>Research</p>
                </S.CatGreen>
                <S.CatPurple>
                  <p>Copywriting</p>
                </S.CatPurple>
              </S.CatTheme>
            </S.Categorios>
            <S.BtnNewCreate id="btnCreate">
              Создать задачу
            </S.BtnNewCreate>
          </S.NewCardContent>
        </S.NewCardBlock>
      </S.NewCardContainer>
    </S.PopNewCard>
  );
};
