import { routes } from "../../../router/routes";
import { Calendar } from "../../Calendar/Calendar";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as S from "./popBrowse.styled";
import { statusList } from "../../../date";
import { DeleteCard, EditCardApi, getCards } from "../../../api";
import { DataCardContext } from "../../../context/DataCardContext";
import { useContext, useEffect, useState } from "react";
import { useUserContext } from "../../../context/useUserContext";

export const PopBrowse = () => {
  const { user } = useUserContext();
  const [error, setError] = useState();
  const { cards, setCards } = useContext(DataCardContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);
  const [editCard, setEditCard] = useState({
    status: "",
    description: "",
    date: "",
  });
  console.log(editCard.topic);
  useEffect(() => {
    getCards(user.token)
      .then((res) => {
        setCards(res.tasks);
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

  const EditCard = async (e) => {
    e.preventDefault();
    const res = await EditCardApi({ ...editCard, token, id });
    console.log(res);
  };
  const EditHandle = () => {
    setIsEdit(!isEdit);
  };
  const CancelHandle = () => {
    setIsEdit(!isEdit);
  };

  const selectStatusHandle = (s) => {
    setEditCard({ ...editCard, status: s });
  };

  return (
    <>
      <S.Browse>
        <S.BrowseContainer>
          <S.BrowseBlock>
            <S.Content>
              <S.TopBlock>
                <S.H3>Название задачи</S.H3>
                <S.CatTheme>
                  {cards.map((card) => (
                    <p key={card._id}>{id === card._id ? card.topic : ""}</p>
                  ))}
                </S.CatTheme>
              </S.TopBlock>
              <S.Status>
                <p>Статус</p>
                <S.StatusThemes>
                  {!isEdit && (
                    <S.StatusTheme>
                      {cards.map((c) => (
                        <p key={c._id}>{id === c._id ? c.status : ""}</p>
                      ))}
                    </S.StatusTheme>
                  )}
                  {isEdit &&
                    statusList.map((s) => (
                      <S.StatusTheme
                        key={s}
                        $isClick={s === editCard.status}
                        onClick={() => selectStatusHandle(s)}
                      >
                        <p>{s}</p>
                      </S.StatusTheme>
                    ))}
                </S.StatusThemes>
              </S.Status>
              <S.BrowseWrap>
                <S.BrowseFrom>
                  <S.FormBlock>
                    <S.Label>Описание задачи</S.Label>
                    <S.TextArea
                      onChange={(e) =>
                        setEditCard({
                          ...editCard,
                          description: e.target.value,
                        })
                      }
                      name="text"
                      placeholder="Введите описание задачи..."
                    />
                  </S.FormBlock>
                </S.BrowseFrom>
                <Calendar
                  selected={editCard.date}
                  setSelected={(date) => setEditCard({ ...editCard, date })}
                />
              </S.BrowseWrap>

              {!isEdit && (
                <S.ButtonsBrowse>
                  <S.BtnGroup>
                    <S.BtnBor onClick={EditHandle}>
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
              )}

              {isEdit && (
                <S.ButtonEdit>
                  <S.BtnGroup>
                    <S.BtnSave onClick={EditCard}>
                      <p>Сохранить</p>
                    </S.BtnSave>
                    <S.BtnDel onClick={CancelHandle}>
                      <p>Отменить</p>
                    </S.BtnDel>
                    <S.BtnDel onClick={Delete}>
                      <p>Удалить задачу</p>
                    </S.BtnDel>
                  </S.BtnGroup>
                  <Link to={routes.main}>
                    <S.BtnClose>Закрыть</S.BtnClose>
                  </Link>
                </S.ButtonEdit>
              )}
            </S.Content>
          </S.BrowseBlock>
        </S.BrowseContainer>
      </S.Browse>
    </>
  );
};
