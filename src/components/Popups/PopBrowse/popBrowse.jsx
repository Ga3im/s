import { routes } from "../../../router/routes";
import { Calendar } from "../../Calendar/Calendar";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as S from "./popBrowse.styled";
import { statusList } from "../../../date";
import { DeleteCard, getCards } from "../../../api";
import { DataCardContext } from "../../../context/DataCardContext";
import { useContext, useEffect, useState } from "react";
import { useUserContext } from "../../../context/useUserContext";

export const PopBrowse = () => {
  const { user } = useUserContext();
  const [error, setError] = useState();
  const { cards, setCards } = useContext(DataCardContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getCards(user.token)
      .then((res) => {
        setCards(res.tasks);
        console.log(res.tasks);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  let token = user.token;
  const Delete = async (e) => {
    e.preventDefault();
    try {
      const res = await DeleteCard({ id, token });
      setCards(res.tasks);
      navigate(routes.main);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <S.Browse>
        <S.BrowseContainer>
          <S.BrowseBlock>
            <S.Content>
              <S.TopBlock>
                <S.H3>Название задачи{id}</S.H3>
                {cards.map((card) => (
                  <S.CatTheme
                  $color ={card.topic}>
                    <p>{card._id === id ? card.topic : ''}</p>
                  </S.CatTheme>
                ))}
              </S.TopBlock>
              <S.Status>
                <p>Статус</p>
                <S.StatusThemes>
                  {statusList.map((status) => (
                    <S.StatusTheme>
                      <p>{status}</p>
                    </S.StatusTheme>
                  ))}
                </S.StatusThemes>
              </S.Status>
              <S.BrowseWrap>
                <S.BrowseFrom>
                  <S.FormBlock>
                    <S.Label>Описание задачи</S.Label>
                    <S.TextArea
                      name="text"
                      placeholder="Введите описание задачи..."
                    ></S.TextArea>
                  </S.FormBlock>
                </S.BrowseFrom>
                <Calendar />
              </S.BrowseWrap>

              <S.ButtonsBrowse>
                <S.BtnGroup>
                  <S.BtnBor>
                    <p>Редактировать задачу</p>
                  </S.BtnBor>
                  <S.BtnDel onClick={Delete}>
                    <p>Удалить задачу</p>
                  </S.BtnDel>
                </S.BtnGroup>
                <Link to={routes.main}>
                  <S.BtnClose>Закрыть</S.BtnClose>
                </Link>
              </S.ButtonsBrowse>
              <div className="pop-browse__btn-edit _hide">
                <div className="btn-group">
                  <button className="btn-edit__edit _btn-bg _hover01">
                    <a href="#">Сохранить</a>
                  </button>
                  <button className="btn-edit__edit _btn-bor _hover03">
                    <a href="#">Отменить</a>
                  </button>
                  <button
                    className="btn-edit__delete _btn-bor _hover03"
                    id="btnDelete"
                  >
                    <a href="#">Удалить задачу</a>
                  </button>
                </div>
                <button className="btn-edit__close _btn-bg _hover01">
                  <a href="#">Закрыть</a>
                </button>
              </div>
            </S.Content>
          </S.BrowseBlock>
        </S.BrowseContainer>
      </S.Browse>
    </>
  );
};
