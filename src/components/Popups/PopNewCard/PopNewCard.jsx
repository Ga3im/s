import { Calendar } from "../../Calendar/Calendar";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./PopNweCard.styled";
import { routes } from "../../../router/routes";
import { addTask } from "../../../api";
import { useState } from "react";
import { useUserContext } from "../../../context/useUserContext";

export const PopNewCard = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const [orange, setOrange] = useState(true);
  const [green, setGreen] = useState(false);
  const [purple, setPurple] = useState(false);
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
      setError("Не была введена наименование задачи");
      return;
    }
    if (addCard.description === "") {
      setError("Не была введена описание задачи");
      return;
    }
    try {
      await addTask({ addCard, token });
      setAddCard((addCard.status = "Нужно сделать"));
      setAddCard((addCard.date = new Date()));
      navigate(routes.main);
    } catch (error) {
      console.log(error.message);
    }
  };

  const HandleOrange = (e) => {
    e.preventDefault();
    setAddCard((addCard.topic = "Web Design"));
    setOrange(!orange);
  };

  const HandleGreen = (e) => {
    e.preventDefault();
    setAddCard((addCard.topic = "Research"));
    setGreen(!green);
  };

  const HandlePurple = (e) => {
    e.preventDefault();
    setAddCard((addCard.topic = "Copywriting"));
    setPurple(!purple);
  };
  return (
    <S.PopNewCard>
      <S.NewCardContainer>
        <S.NewCardBlock>
          <S.NewCardContent>
            <h3>Создание задачи</h3>
            <Link to={routes.main}>
              <S.BtnClose>&#10006;</S.BtnClose>
            </Link>
            <S.NewCardWrap>
              <S.NewCardForm id="formNewCard">
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
              <Calendar />
            </S.NewCardWrap>
            <S.Categorios>
              <p>Категория</p>
              <S.CatThemeForm>
                <S.CatOrange 
                readOnly
                placeholder=" Web Design"
                onClick={HandleOrange}>              
                </S.CatOrange>
                <S.CatGreen 
                readOnly
                placeholder="Research"
                onClick={HandleGreen}>
                </S.CatGreen>
                <S.CatPurple 
                readOnly
                placeholder="Copywriting"
                onClick={HandlePurple}>
                </S.CatPurple>
              </S.CatThemeForm>
            </S.Categorios>
            <S.BtnNewCreate onClick={HandleAddNewCard}>
              Создать задачу
            </S.BtnNewCreate>
          </S.NewCardContent>
        </S.NewCardBlock>
      </S.NewCardContainer>
    </S.PopNewCard>
  );
};
