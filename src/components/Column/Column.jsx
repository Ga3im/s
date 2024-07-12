import { Card } from "../Card/Card"
import * as S  from "./Column.styled"



export const Column = ({title, cards})=>{
    return(
        <S.MainColumn >
			<S.ColumnTitle>
				<p>{title}</p>
			</S.ColumnTitle>
			<S.Cards>{
				cards.map((card)=>(
					<Card 
					cards={cards}
					id={card._id}
					title={card.title} 
					topic={card.topic}
					date={card.date}
					/>
				))
					}			
			</S.Cards>
		</S.MainColumn>	
    )
}