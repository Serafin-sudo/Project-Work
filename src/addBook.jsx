import { useState } from 'react';

import './addBook.css'

function AddBook({ onAdd }) {

    const [form, setForm] = useState({
        code: '',
        title: '',
        author: '',
        year: '',
        genre: '',
        isbn: '',
        description: ''
    });

    const [message, setMessage] = useState('');

    function handleChange(e) {setForm({ ...form, [e.target.name]: e.target.value });}

    async function handleSubmit(e) {
        e.preventDefault();
        //Controllo campi
        if (!form.code || !form.title || !form.author || !form.isbn) {
            alert('Codice, titolo, autore e isbn sono obbligatori');
            setMessage('Codice, titolo, autore e isbn sono obbligatori');
            return;
        }
        //Controllo code
        if (isNaN(Number(form.code))) {
            alert('Code invalido');
            setMessage('Code invalido');
            return;
        }
        //Aggiunta
        await onAdd(form, () => {setForm({ title: '', author: '', year: '', genre: '', code: '', isbn: '', description: '' });});
        setMessage('Libro salvato');
    }

    return (
    <section>
        <h2>Add Book (solo admin hehehe)</h2>
        <form onSubmit={handleSubmit} className='addBookForm'>

            <label>Codice</label>
            <input name='code' placeholder='1' value={form.code} onChange={handleChange} />
            <label>Titolo</label>
            <input name='title' placeholder='Death in the clouds' value={form.title} onChange={handleChange} />
            <label>Autore</label>
            <input name='author' placeholder='Agatha Cristie' value={form.author} onChange={handleChange} />
            <label>Anno</label>
            <input name='year' placeholder='1935' value={form.year} onChange={handleChange} />
            <label>Genere</label>
            <input name='genre' placeholder='Giallo' value={form.genre} onChange={handleChange} />
            <label>Isbn</label>
            <input name='isbn' placeholder='9780399144325' value={form.isbn} onChange={handleChange} />
            <label>Descrizione</label>
            <textarea name='description' placeholder='Un omicidio su un aereo...' value={form.description} onChange={handleChange} rows={4} />

            <button type='submit'>Add Book</button>
        </form>
        {message && <p>{message}</p>}
    </section>
    );
}

export default AddBook;