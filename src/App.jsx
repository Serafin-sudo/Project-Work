import { useState } from 'react'
import './App.css'
import './Filtri.css'
import BooksGrid from '../src/booksGrid'

function App() {

  console.log("APP()");

  return (
    <>
      <h1>Libreria:</h1>

      <div className='filtri'>
        <p>titolo</p>
        <p>autore</p>
        <p>genere</p>
        <p>anno</p>
        <input type="text" placeholder="Death in the clouds.."></input>
        <input type="text" placeholder="Agatha Christie.."></input>
        <input type="text" placeholder="Giallo.."></input>
        <input type="text" placeholder="1935.."></input>
      </div>

      <BooksGrid />
    </>
  )
}

export default App
