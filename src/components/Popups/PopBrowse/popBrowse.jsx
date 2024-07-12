import { routes } from "../../../router/routes";
import { Calendar } from "../../Calendar/Calendar";
import { Link, useParams } from "react-router-dom"
import * as S from './popBrowse.styled';


export const PopBrowse = () => {
const {id} = useParams()
  return (
    <>
    <S.Browse id="popBrowse">
      <S.BrowseContainer>
        <S.BrowseBlock>
          <S.Content>
            <S.TopBlock>
              <h3>Название задачи {id}</h3>
              <S.CatOrange>
                <p>Web Design</p>
              </S.CatOrange>
            </S.TopBlock>
            <S.Status>
              <p>Статус</p>
              <S.StatusThemes>
                <S.StatusTheme>
                  <p>Без статуса</p>
                </S.StatusTheme>
              </S.StatusThemes>
            </S.Status>
            <S.BrowseWrap>
              <S.BrowseFrom
                id="formBrowseCard"
                action="#"
              >
                <S.FormBlock>
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-browse__area"
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                  ></textarea>
                </S.FormBlock>
              </S.BrowseFrom>
              <Calendar />
            </S.BrowseWrap>
            
            <div className="pop-browse__btn-browse ">
              <div className="btn-group">
                <button className="btn-browse__edit _btn-bor _hover03">
                  <a href="#">Редактировать задачу</a>
                </button>
                <button className="btn-browse__delete _btn-bor _hover03">
                  <a href="#">Удалить задачу</a>
                </button>
              </div> 
              <Link to={routes.main}><button className="btn-browse__close _btn-bg _hover01">Закрыть </button></Link>
            </div>
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
