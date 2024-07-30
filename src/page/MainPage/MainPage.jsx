import { useContext, useEffect, useState } from "react";
import { ErMes, GlobalStyle, Wrapper } from "../../GlobalStyle.styled";
import { Header } from "../../components/Header/Header";
import { Main } from "../../components/Main/Main";
import { Outlet } from "react-router-dom";
import { getCards } from "../../api";
import { useUserContext } from "../../context/useUserContext";
import { Loader } from "../Loader/LoaderPage";
import { DataCardContext } from "../../context/DataCardContext";

export const MainPage = ({ changeTheme, setChangeTheme }) => {
  const { setCards } = useContext(DataCardContext);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUserContext();

  const closeUserInfo = () => {
    if (isOpen) {
      setIsOpen(!isOpen);
    }
  };
  useEffect(() => {
    getCards(user.token)
      .then((res) => {
        setCards(res.tasks);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Wrapper onClick={closeUserInfo}>
        <Outlet />
        <Header
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setChangeTheme={setChangeTheme}
          changeTheme={changeTheme}
        />
        {isLoading ? <Loader /> : error ? <ErMes>{error}</ErMes> : <Main />}
      </Wrapper>
    </>
  );
};
