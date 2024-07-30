import { GlobalStyle, Wrapper } from "../../GlobalStyle.styled";
import * as A from "../Login/Login.styled";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../router/routes";
import { register } from "../../api";
import { useState } from "react";
import { useUserContext } from "../../context/useUserContext";

export const Register = () => {
  const { login } = useUserContext();
  const [error, setError] = useState("");
  const [data, setData] = useState({
    login: "",
    name: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleReg = async (e) => {
    e.preventDefault();
    if (data.name === "") {
      setTimeout(() => {
        setError("");
      }, 1500);
      setError("Имя не была введена");
      return;
    }
    if (data.login === "") {
      setTimeout(() => {
        setError("");
      }, 1500);
      setError("Почта не была введена");
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
      const res = await register(data);
      login(res.name);
      localStorage.setItem("user", JSON.stringify(res));
      navigate(routes.main);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <A.ContainerSigin>
          <A.Modal>
            <A.ModalBlock>
              <A.ModalTtl>
                <h2>Регистрация</h2>
              </A.ModalTtl>
              <A.ModalFormLogin onSubmit={handleReg}>
                <A.ModalInput
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  type="text"
                  name="first-name"
                  placeholder="Имя"
                  $isError={error === "Имя не была введена"}
                />
                <A.ModalInput
                  onChange={(e) => setData({ ...data, login: e.target.value })}
                  type="text"
                  name="login"
                  placeholder="Эл. почта"
                  $isError={error === "Почта не была введена"}
                />
                <A.ModalInput
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  $isError={error === "Пароль не был введен"}
                />
                <A.errorMessage>{error}</A.errorMessage>
                <A.BtnEnter type="submit"> Зарегистрироваться </A.BtnEnter>
                <A.ModalFormGroup>
                  <p>
                    Уже есть аккаунт?
                    <Link to={routes.login}>Войдите здесь</Link>
                  </p>
                </A.ModalFormGroup>
              </A.ModalFormLogin>
            </A.ModalBlock>
          </A.Modal>
        </A.ContainerSigin>
      </Wrapper>
    </>
  );
};
