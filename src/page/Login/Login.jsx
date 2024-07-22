import { useState } from "react";
import { GlobalStyle, Wrapper } from "../../GlobalStyle.styled";
import { routes } from "../../router/routes";
import * as S from "./Login.styled";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../../api";
import { useUserContext } from "../../context/useUserContext";

export const Login = () => {
  const { login } = useUserContext();
  const [error, setError] = useState("");
  const [data, setData] = useState({
    login: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (data.login === "") {
      setTimeout(() => {
        setError("");
      }, 1500);
      setError("Логин не был введен");
      return;
    }
    if (data.password === "") {
      setTimeout(() => {
        setError("");
      }, 1500);
      setError("Пароль не был введен");
      return;
    }
    try {
      const res = await signIn(data);
      login(res.user);
      navigate(routes.main);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <S.ContainerSigin>
          <S.Modal>
            <S.ModalBlock>
              <S.ModalTtl>
                <h2>Вход</h2>
              </S.ModalTtl>
              <S.ModalFormLogin
                onSubmit={handleLogin}
                id="formLogIn"
                action="#"
              >
                <S.ModalInput
                  onChange={(e) => setData({ ...data, login: e.target.value })}
                  type="text"
                  name="login"
                  id="formlogin"
                  placeholder="Эл. почта"
                />
                <S.ModalInput
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  type="password"
                  name="password"
                  id="formpassword"
                  placeholder="Пароль"
                />
                {error && 
                <S.errorMessage>{error}</S.errorMessage>}
                <S.BtnEnter id="btnEnter" type="submit">
                  Войти
                </S.BtnEnter>
                <S.ModalFormGroup>
                  <p>Нужно зарегистрироваться?</p>
                  <Link to={routes.register}>Регистрируйтесь здесь</Link>
                </S.ModalFormGroup>
              </S.ModalFormLogin>
            </S.ModalBlock>
          </S.Modal>
        </S.ContainerSigin>
      </Wrapper>
    </>
  );
};
