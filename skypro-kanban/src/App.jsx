import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { PopNewCard } from './components/PopNewCard/PopNewCard'
import { PopBrowse } from './components/PopBrowse/popBrowse'
import { PopExit } from './components/PopUser/popExit'
import { cardList } from './date'



function App() {

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
}, 2000)
  
}, [])

  return (
    <>
     <div class="wrapper">
			<PopExit/>
			<PopNewCard/>
			<PopBrowse/>
		  <Header addCard={addCard}/>
      {isLoading? <img className='loader' src="public/loading.gif" alt="" /> : 	 
      <Main cards={cards}/>
}
		
    </div>
    </>
  )
}

export default App
