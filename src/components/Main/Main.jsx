import { Column } from "../Column/Column"
import { statusList } from "../../date"
import * as S from "./Main.styled"
import { Container } from "../../GlobalStyle.styled"
import { useContext } from "react"
import { DataCardContext } from "../../context/DataCardContext"

export const Main = ()=>{
	const { cards } = useContext(DataCardContext);

    return(
        <S.Main>
			<Container>	
				<S.MainBlock >
					<S.MainContent >
						{statusList.map((status, id)=>(
							<Column 
							key={id}
							title={status} 
							cards={cards.filter((card) =>(card.status === status))}
							/>
						))}													
					</S.MainContent>		
				</S.MainBlock>
			</Container>
		</S.Main>
    )
} 