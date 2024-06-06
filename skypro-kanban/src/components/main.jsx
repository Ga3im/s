import { Column } from "./Column"
import { statusList } from "../date"

export const Main = ({cards})=>{
    return(
        <main class="main">
			<div class="container">
				
				<div class="main__block">
					<div class="main__content">
						{statusList.map((status, id)=>(
							<Column 
							key={id}
							title={status} 
							cards={cards.filter((card) =>(card.status === status))}
							/>
						))}													
					</div>
				
				</div>
			</div>
		</main>
    )
} 