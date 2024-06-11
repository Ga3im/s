import { Column } from "../Column/Column"
import { statusList } from "../../date"

export const Main = ({cards})=>{
    return(
        <main className="main">
			<div className="container">
				
				<div className="main__block">
					<div className="main__content">
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