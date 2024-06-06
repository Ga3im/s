import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { PopNewCard } from './components/popups/PopNewCard'
import { PopBrowse } from './components/popups/popBrowse'
import { PopExit } from './components/popups/popExit'
import { cardList } from './date'



function App() {

  const [cards, setCards] = useState(cardList)
  const [isLoading, setIsLoading] =useState(false)

  const addCard = ()=>{
     const newCard = {
      id:  cards.length + 1,
      topic:"Web Design" ,
      title:"Новая задача",
      date: "30.10.23",
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
      {isLoading? <img className='loader' src="public/loading.gif" alt="" /> : 	 <Main cards={cards}/>
}
		
    </div>
    </>
  )
}

export default App
