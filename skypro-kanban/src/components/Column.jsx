import { Card } from "./Card"

export const Column = ({title, cards})=>{
    return(
        <div class="main__column column">
							<div class="column__title">
								<p>{title}</p>
							</div>
							<div class="cards">
								{cards.map((card)=>(
									<Card key={card.id} 
									title={card.title} 
									topic={card.topic}
									date={card.date}/>
								))}
								
							</div>
						</div>	
    )
}