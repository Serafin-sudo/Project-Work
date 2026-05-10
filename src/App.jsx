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
      // Decodifica il token per leggere email e userId
      // Il token JWT è: header.payload.signature
      // Il payload è la parte centrale, codificata in base64
      const payload = JSON.parse(atob(token.split('.')[1]));
      setUtente(payload); // { userId, email, exp... }
    }
  }, []);
  const handleLogin = () => {
    const token = localStorage.getItem('token');
    const payload = JSON.parse(atob(token.split('.')[1]));
    setUtente(payload);
  };

  return (
    <div className='pagina'>
      <div>
      {utente ? (
        <p>Benvenuto, {utente.email}!</p>
      ) : (
        <p>Non sei loggato</p>
      )}
      </div>
      <header className='header'>
        <h1>Libreria Moby Dick</h1>
        <button className='account-btn' onClick={() => setShowLogin(true)}>Accedi</button>
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
      {showLogin && <Login onClose={() => setShowLogin(false)} onLogin={handleLogin} />}
    </div>
  )
}

export default App;
