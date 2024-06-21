import { useState, useEffect } from "react"
import { cardList } from "../../date"
import { Wrapper } from "../../GlobalStyle.styled"
import {PopNewCard} from "../../components/Popups/PopNewCard/PopNewCard"
import {Header} from "../../components/Header/Header"
import {Main} from "../../components/Main/Main"
import {Outlet} from "react-router-dom"


export const MainPage = ({setChangeTheme, changeTheme})=>{
    const [cards, setCards] = useState(cardList)
    const [isLoading, setIsLoading] =useState(false)

    const addCard = ()=>{
        const newCard = {
         id:  cards.length + 1,
         topic:"Web Design" ,
         title:"Новая задача",
         date: "8.06.24",
         status:"Без статуса",
        }
        setCards([...cards, newCard])
     }

   useEffect(()=>{
   setIsLoading(true)
   setTimeout(()=>{
     setIsLoading(false)
   }, 0)
     
   }, [])

    return(
  <Wrapper>
        <Outlet/>
        <PopNewCard/>
      <Header addCard={addCard} setChangeTheme={setChangeTheme} changeTheme={changeTheme}/>
  {isLoading? <img className='loader' src="public/loading.gif" alt="" /> : 	 
  <Main  cards={cards}/>
}
</Wrapper>
    )
}