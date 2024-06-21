import { ButtonExitNo, ButtonExitYes, PopExitContainer, PopExitBlock, PopExitGroup } from "./PopExit.styled"
export const PopExit = ()=>{
    return(
        <div className="pop-exit" id="popExit">
				<PopExitContainer>
					<PopExitBlock>
						<div className="pop-exit__ttl">
							<h2>Выйти из аккаунта?</h2>
						</div>
						<form className="pop-exit__form" id="formExit" action="#">
							<PopExitGroup>
							<a href="modal/signin.html"><ButtonExitYes id="exitYes">Да, выйти </ButtonExitYes></a>
							<a href="main.html"><ButtonExitNo id="exitNo">Нет, остаться</ButtonExitNo></a> 
							</PopExitGroup>
						</form>
					</PopExitBlock>
				</PopExitContainer>
			</div>
    )
}