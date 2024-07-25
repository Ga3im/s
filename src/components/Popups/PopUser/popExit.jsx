import { routes } from "../../../router/routes"
import { Link } from "react-router-dom"
import * as S from "./PopExit.styled"
import { useUserContext } from "../../../context/useUserContext"

export const PopExit = ()=>{
	const {logout} = useUserContext()

    return(
        <S.PopExit>
				<S.PopExitContainer>
					<S.PopExitBlock>
						<S.ExitTtl>
							<h2>Выйти из аккаунта?</h2>
						</S.ExitTtl>
						<S.FormExit>
							<S.PopExitGroup>
							<S.ButtonExitYes onClick={logout}>Да, выйти </S.ButtonExitYes>
							<Link to={routes.main}><S.ButtonExitNo id="exitNo">Нет, остаться</S.ButtonExitNo></Link> 
							</S.PopExitGroup>
						</S.FormExit>
					</S.PopExitBlock>
				</S.PopExitContainer>
			</S.PopExit>
    )
}