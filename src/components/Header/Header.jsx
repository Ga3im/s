import * as S from "./Header.styled.js";
import { Container } from "../../GlobalStyle.styled";
import { Link } from "react-router-dom";
import { routes } from "../../router/routes.js";
import { useUserContext } from "../../context/useUserContext.js";
import { useState } from "react";

export const Header = ({ isOpen, setIsOpen, changeTheme, setChangeTheme }) => {
  const { user } = useUserContext();
  const [isChecked, setIsChecked] = useState(false);
  const toggleOpenUser = () => {
    setIsOpen(!isOpen);
  };

  const onChangeTheme = (e) => {
    e.preventDefault();
    setIsChecked(!isChecked);
    localStorage.setItem("theme", isChecked);
    setChangeTheme(changeTheme === "light" ? "dark" : "light");
  };

  return (
    <S.Header>
      <Container>
        <S.HeaderBlock>
          <S.HeaderLogo>
          
          </S.HeaderLogo>
          <S.Nav>
            <Link to={routes.addcard}>
              <S.ButtonNewTask id="btnMainNew">
                Создать новую задачу
              </S.ButtonNewTask>
            </Link>
            <S.HeaderUserName $isOpen={isOpen} onClick={toggleOpenUser}>
              {user.name}
            </S.HeaderUserName>
            {isOpen && (
              <S.HeaderPopUser onClick={(e) => e.stopPropagation()}>
                <S.UserName>{user.name}</S.UserName>
                <S.UserMail>{user.login}</S.UserMail>
                <S.UserTheme
                checked={isChecked}>
                  <p>Темная тема</p>
                  <input
                    onClick={onChangeTheme}
                    type="checkbox"
                    name="checkbox"
                  />
                </S.UserTheme>
                <Link to={routes.exit}>
                  <S.ButtonExit type="button">Выйти</S.ButtonExit>
                </Link>
              </S.HeaderPopUser>
            )}
          </S.Nav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
};
