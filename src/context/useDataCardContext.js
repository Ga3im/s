import { useContext } from "react"
import { DataCardContext } from "./DataCardContext"

export const useDataCardContext = ()=>{
    return useContext(DataCardContext)
}