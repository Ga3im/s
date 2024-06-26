import { useEffect, useState } from "react"
import { Card } from "../Card/Card"
import * as S  from "./Column.styled"
import { getCards } from "../../api"


export const Column = ({title, cards})=>{
	const [card, setCard] = useState(cards)
	useEffect(()=>{
		getCards().then((card)=>
			setCard(card.tasks))	
	}, [])
    return(
        <S.MainColumn >
			<S.ColumnTitle>
				<p>{title}</p>
			</S.ColumnTitle>
			<S.Cards>
				{card.map((card)=>(
					<Card 
					id={card.id}
					key={card.id} 
					title={card.title} 
					topic={card.topic}
					date={card.date}/>
				))}	
			</S.Cards>
		</S.MainColumn>	
    )
}