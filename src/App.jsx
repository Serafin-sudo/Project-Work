import './App.css'
import './Filtri.css'
import BooksGrid from './booksGrid'
import AddBook from './addBook';

function App() {

  console.log("APP()");

  return (
    <div className='pagina'>
      <header className='header'>
        <h1>Libreria:</h1>
        <h2>FILTRI</h2>
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
      </header>
      <main className='main'>
        <AddBook />
        <BooksGrid />
      </main>
      <footer className='footer'>
        <h3>Serafini & Minta</h3>
      </footer>
    </div>
  )
}

export default App;
