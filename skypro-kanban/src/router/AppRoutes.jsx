import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "../page/NotFound/NotFound.jsx";
import { MainPage } from "../page/MainPage/MainPage.jsx";
import { routes } from "./routes.js";
import { Login } from "../page/Login/Login.jsx";
import { Register } from "../page/Register/Register.jsx";
import { ProtectedRoute } from "./ProtectedRoute.jsx";
import { ExitPage } from "../page/ExitPage/ExitPage.jsx";
import { CardPage } from "../page/CardPage/CardPage.jsx";
import { UserProvider } from "../context/UserContext.jsx";
import { AddCardPage } from "../page/AddCardPage/AddCardPage.jsx";
import { DataCardProvider } from "../context/DataCardContext.jsx";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { dark, light } from "../theme.js";

export const AppRoutes = () => {
  const [changeTheme, setChangeTheme] = useState("light");
  return (
    <ThemeProvider theme={changeTheme === "light" ? light : dark}>
      <UserProvider>
        <DataCardProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<ProtectedRoute />}>
                <Route
                  path={routes.main}
                  element={
                    <MainPage
                      changeTheme={changeTheme}
                      setChangeTheme={setChangeTheme}
                    />
                  }
                >
                  <Route path={routes.addcard} element={<AddCardPage />} />
                  <Route path={routes.exit} element={<ExitPage />} />
                  <Route path={routes.card} element={<CardPage />} />
                </Route>
              </Route>
              <Route path={routes.login} element={<Login />} />
              <Route path={routes.notFound} element={<NotFound />} />
              <Route path={routes.register} element={<Register />} />
            </Routes>
          </BrowserRouter>
        </DataCardProvider>
      </UserProvider>
    </ThemeProvider>
  );
};
