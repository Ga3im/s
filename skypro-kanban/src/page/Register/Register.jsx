import { GlobalStyle, Wrapper } from "../../GlobalStyle.styled"
import * as A from "../Login/Login.styled"
import { Link, useNavigate } from "react-router-dom"
import {routes} from "../../router/routes"
import { register } from "../../api"
import { useState } from "react"



export const Register = ({setUser })=>{
	const[login, setLogin] = useState()
	const[userName, setUserName] = useState()
	const[password, setPassword] = useState()
	const navigate = useNavigate()

	const handleReg = (e)=>{
		e.preventDefault()
		register({
			login:login,
			userName: userName,
			password:password
		})
		setIsAuth(true)
	   navigate(routes.main)

		}
    return(
        <>
        <GlobalStyle/>
        <Wrapper>
        <A.ContainerSigin>
            <A.Modal>
            <A.ModalBlock>
					<A.ModalTtl>
						<h2>Регистрация</h2>
					</A.ModalTtl>
					<A.ModalFormLogin id="formLogUp" action="#">
						<A.ModalInput 
						onChange={(e)=>setUserName(e.target.value)} type="text" name="first-name" id="first-name" placeholder="Имя"/>
						<A.ModalInput 
						onChange={(e)=> setLogin(e.target.value)} className="modal__input login" type="text" name="login" id="loginReg" placeholder="Эл. почта"/>
						<A.ModalInput  
						onChange={(e)=> setPassword(e.target.value)} className="modal__input password-first" type="password" name="password" id="passwordFirst" placeholder="Пароль"/>
						<A.BtnEnter id="SignUpEnter" onClick={handleReg}> Зарегистрироваться </A.BtnEnter>
						<A.ModalFormGroup>
							<p>Уже есть аккаунт?<Link to={routes.login} >Войдите здесь</Link></p>
						</A.ModalFormGroup>
					</A.ModalFormLogin>
			</A.ModalBlock>
            </A.Modal>
        </A.ContainerSigin>
    </Wrapper>
    </>
    )
}