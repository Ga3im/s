import { useState, useEffect } from "react"
import { GlobalStyle, Wrapper } from "../../GlobalStyle.styled"
import {PopNewCard} from "../../components/Popups/PopNewCard/PopNewCard"
import {Header} from "../../components/Header/Header"
import {Main} from "../../components/Main/Main"
import {Outlet} from "react-router-dom"
import { getCards, postCards } from "../../api"
import { ThemeProvider } from "styled-components"
import { light, dark } from '../../theme'
import { useUserContext } from "../../context/useUserContext"

export const MainPage = ()=>{
    const [cards, setCards] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState()
    const [changeTheme, setChangeTheme] = useState("light")
    const [isOpen, setIsOpen] = useState(false)
  const {user} = useUserContext()


    const closeUserInfo = ()=>{
      if (isOpen) {
        setIsOpen(!isOpen)
      }
    }

    const addCard = async ()=>{
      if (!cards) 
        return  
       const newCard = await postCards(cards)
        setCards(newCard.tasks)}
   useEffect(()=>{
   getCards(user.token)
   .then((res)=>{
    setCards(res.tasks)
  })
   .catch((error)=>{
    setError(error.message)
   })
   .finally(()=>{
    setIsLoading(false)
   })
   }, [])

    return(
     <ThemeProvider theme={changeTheme === "light" ? light : dark}>
     <GlobalStyle/>
     <Wrapper onClick={closeUserInfo}>
        <Outlet/>
        <PopNewCard/>
      <Header 
      isOpen={isOpen} setIsOpen={setIsOpen}
      setChangeTheme={setChangeTheme} changeTheme={changeTheme}/>
        {isLoading? 
        <img className='loader' src="public/loading.gif" alt="" />
        : error?
        <p>{error}</p> 
        : <Main cards={cards}/>}
        </Wrapper>
        </ThemeProvider>

    )
}