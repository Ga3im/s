import {BrowserRouter, Routes, Route }from "react-router-dom";
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


export const AppRoutes = () =>{
    return(
      <UserProvider>
        <BrowserRouter>  
          <Routes>
            <Route element={<ProtectedRoute/>}>
              <Route path={routes.main} element={<MainPage/>}>     
              <Route path={routes.exit} element={<ExitPage/>}/>
              <Route path={routes.card} element={<CardPage/>}/>
              <Route path={routes.addcard} element={<AddCardPage/>}/>
              </Route>
            </Route>
              <Route path={routes.login} element={<Login />}/>                 
              <Route path={routes.notFound} element={<NotFound/>}/>     
              <Route path={routes.register} element={<Register />}/>     
          </Routes>  
        </BrowserRouter>   
      </UserProvider>
    )
}
