import { useState, useEffect } from "react"
import { Wrapper } from "../../GlobalStyle.styled"
import {PopNewCard} from "../../components/Popups/PopNewCard/PopNewCard"
import {Header} from "../../components/Header/Header"
import {Main} from "../../components/Main/Main"
import {Outlet} from "react-router-dom"
import { getCards, postCards } from "../../api"


export const MainPage = ({setChangeTheme, changeTheme, user})=>{
    const [cards, setCards] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState()

    const addCard = async ()=>{
      if (!cards) {
        return;
      }  
       const newCard = await postCards(cards)
        setCards(newCard.tasks)
     }

   useEffect(()=>{
   getCards(user.token)
   .then((res)=>
    {setCards(res.tasks)
  })
   .catch((error)=>{
    setError(error.message)
   })
   .finally(()=>{
    setIsLoading(false)
   })
   }, [])

    return(
  <Wrapper>
        <Outlet/>
        <PopNewCard/>
      <Header addCard={addCard} setChangeTheme={setChangeTheme} changeTheme={changeTheme}/>
  {isLoading? 
  <img className='loader' src="public/loading.gif" alt="" />
  : error?
  <p>{error}</p> 
  : <Main cards={cards}/>
}
</Wrapper>
    )
}