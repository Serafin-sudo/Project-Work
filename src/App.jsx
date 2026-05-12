import './App.css'
import './Filtri.css'
import Filtri from './Filtri'
import BooksGrid from './booksGrid'
import AddBook from './addBook'
import Login from "./login"
import { useState, useEffect } from 'react';
import axios from 'axios'

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

		async function fetchLibrary()
		{
			try{
				const res = await axios.get('http://localhost:3001/Library')
				console.log(res.data);

				setBooks(res.data);

			}catch(err){
				console.log("Errore:", err.response?.data || err.message);
		
			}
			
		}

		fetchLibrary();

		// fetch('http://localhost:3001/Library')
		// 	.then(res => res.json())
		// 	.then(data => {
		// 		console.log("Libri ricevuti:", data);
		// 		setBooks(Array.isArray(data) ? data : []);
		// 	})
		// 	.catch(err => console.log("Errore fetch:", err));

	}, []);
  	//Login
	const handleLogin = () => {
		const token = localStorage.getItem('token');
		const payload = JSON.parse(atob(token.split('.')[1]));
		setUtente(payload);
	};

	//Eliminazione libro, definita qui ma usata nel book.jsx
	const deleteBook = async (code) => {
		const codeNum = parseInt(code);

		if (isNaN(codeNum)) {
			alert("Codice libro non valido");
			return;
		}

		try {
			const response = await fetch(`http://localhost:3001/Library/${codeNum}`, {
				method: 'DELETE',
			});

			if (response.ok) {
				setBooks(prevBooks => prevBooks.filter(book => book.code !== codeNum));
			} else {
				const errorData = await response.json();
				alert("Errore: " + (errorData.error));
			}
		} catch (err) {
			console.error("Errore", err);
			alert("Errore", err)
		}
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
			<BooksGrid books={books} utente={utente} onDelete={deleteBook} />
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
