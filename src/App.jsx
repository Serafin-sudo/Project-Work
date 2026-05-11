import './App.css'
import './Filtri.css'
import BooksGrid from './booksGrid'
import AddBook from './addBook'
import Login from "./login"
import { useState, useEffect } from 'react';

function App() {

  console.log("APP()");

  const [showLogin, setShowLogin] = useState(false);
  const [utente, setUtente] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      console.log(payload);
      setUtente(payload);
    }
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
          <h2>FILTRI</h2>
          <div className='filtri'>
            <input type="text" placeholder="Titolo.."></input>
            <input type="text" placeholder="Autore.."></input>
          </div>
          <AddBook />
        </div>
        <div className='booksGridMain'>
          <BooksGrid />
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
