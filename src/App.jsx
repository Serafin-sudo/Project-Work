import './App.css'
import './Filtri.css'
import Filtri from './Filtri'
import BooksGrid from './booksGrid'
import AddBook from './addBook'
import Login from "./login"
import { useState, useEffect } from 'react';

function App() {

  console.log("APP()");

  const [showLogin, setShowLogin] = useState(false);
  const [utente, setUtente] = useState(null);
  const [books, setBooks] = useState([]);

  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      setUtente(payload);
    }

    fetch('http://localhost:3001/Library')
        .then(res => res.json())
        .then(data => {
            console.log("Libri ricevuti:", data);
            setBooks(Array.isArray(data) ? data : []);
        })
        .catch(err => console.log("Errore fetch:", err));
  }, []);

  const handleLogin = () => {
    const token = localStorage.getItem('token');
    const payload = JSON.parse(atob(token.split('.')[1]));
    setUtente(payload);
  };

  return (
  <div className='pagina'>

    <header className='header'>
      <h1>Libreria Moby Dick</h1>
      <button className='account-btn' onClick={() => setShowLogin(true)}>{utente ? utente.name : "Accedi"}</button>
    </header>

    <main className='main'>
      <div className='menuLaterale'>
        <Filtri onFilter={setBooks} />
        {utente && utente.admin == 1 && <AddBook />}
      </div>
      <div className='booksGridMain'>
        <BooksGrid books={books} />
      </div>
    </main>

    <footer className='footer'>
      <h3>Serafini & Minta</h3>
    </footer>
    
    {showLogin && <Login onClose={() => setShowLogin(false)} onLogin={handleLogin} />}

  </div>
  )
}

export default App;
