import { useState } from 'react'
import './App.css'
import { GlobalStyle} from './GlobalStyle.styled'
import { ThemeProvider } from 'styled-components'
import { light, dark } from './theme'
import { AppRoutes } from './router/AppRoutes'

function App() {
  const [changeTheme, setChangeTheme] = useState("light")
  return (
    <ThemeProvider theme={changeTheme === "light" ? light : dark}>
     <GlobalStyle/>
     <AppRoutes changeTheme={changeTheme} setChangeTheme={setChangeTheme}/>
    </ThemeProvider>
  )
}

export default App
