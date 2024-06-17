import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { cardList } from './date'
import { GlobalStyle, Wrapper } from './GlobalStyle.styled'
import { PopExit} from './components/Popups/PopUser/popExit'
import { PopNewCard} from './components/Popups/PopNewCard/PopNewCard'
import { PopBrowse} from './components/Popups/PopBrowse/popBrowse'
import { ThemeProvider } from 'styled-components'
import { light, dark } from './theme'

function App() {

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

  return (
    <ThemeProvider theme={changeTheme === "light" ? light : dark}>
     <GlobalStyle/>
     <Wrapper >
			<PopExit/>
			<PopNewCard/>
			<PopBrowse/>
		  <Header addCard={addCard} setChangeTheme={setChangeTheme} changeTheme={changeTheme}/>
      {isLoading? <img className='loader' src="public/loading.gif" alt="" /> : 	 
      <Main cards={cards}/>
}
    </Wrapper>
    </ThemeProvider>
  )
}

export default App
