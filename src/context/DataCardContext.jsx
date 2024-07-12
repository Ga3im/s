import { createContext, useEffect } from "react";
import { Card } from "../components/Card/Card.styled";

export const DataCardContext = createContext(null)

export const DataCardProvider = ({child})=>{
    const {title, topic, id, cards, date } = useDataCard()
    useEffect(()=>{
        cards.map((card)=>(
            <Card
            cards={cards}
            id={card._id}
            title={card.title} 
            topic={card.topic}
            date={card.date}
            />
        ))
    },[])

    return(
        <DataCardContext.Provider value={{topic,date, cards, title, id}}>
            {child}
        </DataCardContext.Provider>
    )
}
