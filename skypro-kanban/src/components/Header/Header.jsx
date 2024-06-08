import { useState } from "react"

export const Header = ({addCard}) =>{
	const [isOpen, setIsOpen] = useState(false)
	const [isDark, setIsDark] = useState(false)
	const toggleOpenUser = () =>{
		setIsOpen(!isOpen)
	}
	 const toggleDarkTheme = ()=>{
		setIsDark(!isDark)
		console.log(!isDark)
	 }
    return(<header className="header">
			<div className="container">
				<div className="header__block">
					<div className="header__logo _show _light">
						<a href="" target="_self"><img src="/logo.png" alt="logo"/></a>
					</div>
					<div className="header__logo _dark">
						<a href="" target="_self"><img src="/logo_dark.png" alt="logo"/></a>
					</div>
					<nav className="header__nav">
						<button
						onClick={addCard}
						 className="header__btn-main-new _hover01" id="btnMainNew"><a>Создать новую задачу</a></button>
						<a onClick={toggleOpenUser} className="header__user _hover02">Ivan Ivanov</a>
						{isOpen && 
						<div className="header__pop-user-set pop-user-set" id="user-set-target">
						<a href=""></a>
							<p className="pop-user-set__name">Ivan Ivanov</p>
							<p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
							<div className="pop-user-set__theme">
								<p>Темная тема</p>
								<input onClick={toggleDarkTheme} type="checkbox" className="checkbox" name="checkbox"/>
							</div>
							<button type="button" className="_hover03"><a href="#popExit">Выйти</a></button>
						</div>}
						
					</nav>					
				</div>
			</div>			
		</header>)
}
