import * as S from "./Header.styled.js"
import { Container } from "../../GlobalStyle.styled"
import { Link } from "react-router-dom"
import { routes } from "../../router/routes.js"
import { useUserContext } from "../../context/useUserContext.js"



export const Header = ({ isOpen, setIsOpen, addCard, changeTheme, setChangeTheme}) =>{
	
	const {user} = useUserContext()
	const toggleOpenUser = () =>{
		setIsOpen(!isOpen)
	  }

	const onChangeTheme = ()=>{
		setChangeTheme(changeTheme === 'light'? 'dark' : 'light')
	}

    return(<S.Header>
			<Container>
				<S.HeaderBlock>
					<S.HeaderLogo>
						<a href="" target="_self"><img src="/logo.png" alt="logo"/></a>
					</S.HeaderLogo>
					{/* <S.HeaderLogo >
						<a href="" target="_self"><img src="/logo_dark.png" alt="logo"/></a>
					</S.HeaderLogo> */}
					<S.Nav>
						<Link to={routes.addcard}> 
						<S.ButtonNewTask
						id="btnMainNew">Создать новую задачу</S.ButtonNewTask>
						</Link>
						<S.HeaderUserName $isOpen={isOpen} onClick={toggleOpenUser} >{user.name}</S.HeaderUserName>
						{isOpen && 
						<S.HeaderPopUser>
							<S.UserName>{user.name}</S.UserName>
							<S.UserMail>{user.login}</S.UserMail>
							<S.UserTheme>
								<p>Темная тема</p>
								<input defaultChecked={changeTheme === "dark"} onClick={onChangeTheme} type="checkbox" className="checkbox" name="checkbox"/>
							</S.UserTheme>
							<Link to={routes.exit}><S.ButtonExit type="button">Выйти</S.ButtonExit></Link>
						</S.HeaderPopUser>}			
					</S.Nav>					
				</S.HeaderBlock>
			</Container>			
		</S.Header>)
}
