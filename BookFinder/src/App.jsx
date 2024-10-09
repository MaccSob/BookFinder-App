import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <h1>Book Finding app</h1>
        <form>
  <label>
    Title:
    <input type="text" name="name" placeholder='Misery' />
  </label>
  <label>
    Author:
    <input type="text" name="author" placeholder='Stephen King' />
  </label>
  <label>
  Published Year:
    <input type="text" name="title" placeholder='1996' />
  </label>
  <input type="submit" value="Submit" />





</form>



    </>
  )
}

export default App
