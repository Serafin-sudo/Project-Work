import { useState } from 'react'
import './App.css'
import BooksGrid from './booksGrid'

function App() {

  console.log("APP()");

  return (
    <>
      <h1>Moby Dick</h1>
      <BooksGrid />
    </>
  )
}

export default App
