import { useState } from "react"
import * as S from "./Header.styled.js"
import { Container } from "../../GlobalStyle.styled"

export const Header = ({addCard, changeTheme, setChangeTheme}) =>{
	const [isOpen, setIsOpen] = useState(false)
	
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
						<S.ButtonNewTask
						onClick={addCard}
						id="btnMainNew"><a>Создать новую задачу</a></S.ButtonNewTask>
						<S.HeaderUserName $isOpen={isOpen} onClick={toggleOpenUser} >Ivan Ivanov</S.HeaderUserName>
						{isOpen && 
						<S.HeaderPopUser id="user-set-target">
							<S.UserName>Ivan Ivanov</S.UserName>
							<S.UserMail>ivan.ivanov@gmail.com</S.UserMail>
							<S.UserTheme>
								<p>Темная тема</p>
								<input checked={changeTheme === "dark"} onClick={onChangeTheme} type="checkbox" className="checkbox" name="checkbox"/>
							</S.UserTheme>
							<a href="#popExit"><S.ButtonExit type="button">Выйти</S.ButtonExit></a>
						</S.HeaderPopUser>}
						
					</S.Nav>					
				</S.HeaderBlock>
			</Container>			
		</S.Header>)
}
