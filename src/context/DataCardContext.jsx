import { createContext, useState } from "react";

export const DataCardContext = createContext(null)

export const DataCardProvider = ({children})=>{
    const [cards, setCards] = useState([])


    return(
        <DataCardContext.Provider value={{cards, setCards}}>
            {children}
        </DataCardContext.Provider>
    )
}
