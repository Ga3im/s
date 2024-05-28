import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Main from './components/main'
import Header from './components/Header'
import './App.css'
import Card from './components/Card'
import popBrowse from './components/popups/popBrowse'


function App() {
  return (
    <>
    <div class="wrapper">
    <div class="pop-exit" id="popExit">
				<div class="pop-exit__container">
					<div class="pop-exit__block">
						<div class="pop-exit__ttl">
							<h2>Выйти из аккаунта?</h2>
						</div>
						<form class="pop-exit__form" id="formExit" action="#">
							<div class="pop-exit__form-group">
								<button class="pop-exit__exit-yes _hover01" id="exitYes"><a href="modal/signin.html">Да, выйти</a> </button>
								<button class="pop-exit__exit-no _hover03" id="exitNo"><a href="main.html">Нет, остаться</a> </button>
							</div>
						</form>
					</div>
				</div>
			</div>
    <popBrowse/>
   <Header/>

   <Main/>   


</div>

<script src="js/script.js"></script>


    </>
  )
}

export default App
