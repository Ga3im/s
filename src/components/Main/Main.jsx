import { Column } from "../Column/Column"
import { statusList } from "../../date"
import * as S from "./Main.styled"
import { Container } from "../../GlobalStyle.styled"

export const Main = ({cards})=>{
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