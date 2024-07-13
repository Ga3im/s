import { Calendar } from "../../Calendar/Calendar";
import { Link } from "react-router-dom";
import * as S from "./PopNweCard.styled";
import { routes } from "../../../router/routes";
import { addTask } from "../../../api";
import { useState } from "react";

// const [addCard, setAddCard] = useState({
//   cardName:'',
//   description: '',
//   // category: '',
//   // date: '',
// })
const HandleAddNewCard = async (e)=>{
  e.preventDefault()
  await addTask()
  .then((res)=>{
    console.log(res)
  })
}

export const HandleOrange =()=>{
console.log('orange')
}

export const HandleGreen =()=>{
  console.log('green')
  }

  export const HandlePurple =()=>{
    console.log('purple')
    }
export const PopNewCard = () => {
  return (
    <S.PopNewCard onSubmit={HandleAddNewCard}>
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
                    // onChange={(e)=> setAddCard({...addCard, cardName:e.target.value})}
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
                    // onChange={(e)=> setAddCard({...addCard, description: e.target.value})}
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
                <S.CatOrange onClick={HandleOrange}>
                  <p>Web Design</p>
                </S.CatOrange>
                <S.CatGreen onClick={HandleGreen}>
                  <p>Research</p>
                </S.CatGreen>
                <S.CatPurple onClick={HandlePurple}>
                  <p>Copywriting</p>
                </S.CatPurple>
              </S.CatTheme>
            </S.Categorios>
            <Link to={routes.main}>
            <S.BtnNewCreate type="submit">
              Создать задачу
            </S.BtnNewCreate>
            </Link>
          </S.NewCardContent>
        </S.NewCardBlock>
      </S.NewCardContainer>
    </S.PopNewCard>
  );
};
