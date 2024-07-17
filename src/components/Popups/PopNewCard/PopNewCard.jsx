import { Calendar } from "../../Calendar/Calendar";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./PopNweCard.styled";
import { routes } from "../../../router/routes";
import { addTask } from "../../../api";
import { useContext, useState } from "react";
import { useUserContext } from "../../../context/useUserContext";
import { DataCardContext } from "../../../context/DataCardContext";

export const PopNewCard = () => {
  const { user } = useUserContext();
	const { setCards } = useContext(DataCardContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [addCard, setAddCard] = useState({
    title: "",
    topic: "",
    status: "",
    description: "",
    date: "",
  });
  let token = user.token;

  const HandleAddNewCard = async (e) => {
    e.preventDefault();
    if (addCard.title === "") {
      setTimeout(() => {
				setError('')
			}, 1500);
      setError("Не была введена наименование задачи");
      return;
    }
    if (addCard.description === "") {
      setTimeout(() => {
				setError('')
			}, 1500);
      setError("Не была введена описание задачи");
      return;
    }
    if (addCard.topic === "") {
      setTimeout(() => {
				setError('')
			}, 1500);
      setError("Выберите категорию");
      return;
    }
    if (addCard.date === "") {
      setTimeout(() => {
				setError('')
			}, 1500);
      setError("Выберите дату");
      return;
    }
    try {
    
      const res = await addTask({...addCard, token });
      setCards(res.tasks)
      navigate(routes.main);
      console.log(addCard)
    } catch (error) {
      console.log(error.message);
    }
  };

  const catButtonHandler = (cat)=>{
    if(cat === addCard.topic){
     return setAddCard({...addCard, topic:''})
    }
    setAddCard({...addCard, topic:cat})
  }

  const categories = ['Web Design', 'Research', 'Copywriting'] 

  return (
    <S.PopNewCard>
      <S.NewCardContainer>
        <S.NewCardBlock>
          <S.NewCardContent  onSubmit={HandleAddNewCard}>
            <h3>Создание задачи</h3>
            <Link to={routes.main}>
              <S.BtnClose>&#10006;</S.BtnClose>
            </Link>
            <S.NewCardWrap>
              <S.NewCardForm>
                <S.NewBlock>
                  <S.Label>Название задачи</S.Label>
                  <S.NewInput
                    onChange={(e) =>
                      setAddCard({ ...addCard, title: e.target.value })
                    }
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </S.NewBlock>
                <S.NewBlock>
                  <S.Label htmlFor="textArea">Описание задачи</S.Label>
                  <S.TextArea
                    onChange={(e) =>
                      setAddCard({ ...addCard, description: e.target.value })
                    }
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></S.TextArea>
                </S.NewBlock>
              </S.NewCardForm>
              <Calendar selected={addCard.date} setSelected={(date)=> setAddCard({...addCard, date})}/>
            </S.NewCardWrap>
            <div>
              <S.Categorios>Категория</S.Categorios>
              <S.CatThemeForm>
                {categories.map((cat)=>(
                   <S.CatButton
                   $color={cat}
                   $isActive={cat === addCard.topic}
                   onClick={()=>catButtonHandler(cat)}>
                    {cat}              
                   </S.CatButton>
                ))}
               
              </S.CatThemeForm>
            </div>
            <S.errorMes>{error}</S.errorMes>
            <S.BtnNewCreate type="submit">
              Создать задачу
            </S.BtnNewCreate>
          </S.NewCardContent>
        </S.NewCardBlock>
      </S.NewCardContainer>
    </S.PopNewCard>
  );
};
