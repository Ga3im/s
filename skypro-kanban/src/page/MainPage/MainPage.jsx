import { useState, useEffect } from "react"
import { cardList } from "../../date"
import { GlobalStyle, Wrapper } from "../../GlobalStyle.styled"
import {PopNewCard} from "../../components/Popups/PopNewCard/PopNewCard"
import {Header} from "../../components/Header/Header"
import {Main} from "../../components/Main/Main"
import {Outlet} from "react-router-dom"
import { ThemeProvider } from 'styled-components'
import { light, dark } from '../../theme'



export const MainPage = ()=>{
    const [cards, setCards] = useState(cardList)
    const [isLoading, setIsLoading] =useState(false)
    const [changeTheme, setChangeTheme] = useState("light")


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
      <ThemeProvider theme={changeTheme === "light" ? light : dark}>
     <GlobalStyle/>
  <Wrapper>
        <Outlet/>
        <PopNewCard/>
      <Header addCard={addCard} setChangeTheme={setChangeTheme} changeTheme={changeTheme}/>
  {isLoading? <img className='loader' src="public/loading.gif" alt="" /> : 	 
  <Main  cards={cards}/>
}
</Wrapper>
</ThemeProvider>

    )
}