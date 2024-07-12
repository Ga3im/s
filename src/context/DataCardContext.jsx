import { createContext } from "react";

export const DataCardContext = createContext(null)

export const DataCardProvider = ({child})=>{
    const {title, topic, id, } = useDataCard()
    return(
        <DataCardContext.Provider value={{topic, title, id}}>
            {child}
        </DataCardContext.Provider>
    )
}
