import { useState } from 'react';

import './editBook.css'
import './App.css'

function EditBook({ onClose, onEdit }) {

    const [code, setCode] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');
    const [genre, setGenre] = useState('');
    const [isbn, setIsbn] = useState('');
    const [description, setDescription] = useState('');

    const [error, setError] = useState('');
    //Se sta caricando qualcosa
    const [loading, setLoading] = useState(false);

    const handleConfirm = () => {
        onEdit({ title, author, year, isbn, description });
    };

    return (
    <div className='overlay' onClick={onClose}>
        
        <div className='overlay_box' onClick={e => e.stopPropagation()}>
            
            <button className='overlay_x' onClick={onClose}>✕</button>

            <h2>Modifica libro</h2>
            
            <label>Codice</label>
            <input placeholder="1" value={code} onChange={e => setCode(e.target.value)}/>

            <label>Titolo</label>
            <input placeholder="Death in the clouds" value={title} onChange={e => setTitle(e.target.value)}/>

            <label>Autore</label>
            <input placeholder="Agatha Cristie" value={author} onChange={e => setAuthor(e.target.value)}/>
            
            <label>Anno</label>
            <input placeholder="1935" value={year} onChange={e => setYear(e.target.value)}/>
            
            <label>Genere</label>
            <input placeholder="Giallo" value={genre} onChange={e => setGenre(e.target.value)}/>

            <label>ISBN</label>
            <input placeholder="9780396069614" value={isbn} onChange={e => setIsbn(e.target.value)}/>
            
            <label>Descrizione</label>
            <textarea
                placeholder="Un omicidio su un aereo..."
                value={description}
                onChange={e => setDescription(e.target.value)}
                rows={4}
            />
            {error && <p className='book_edit_error'>{error}</p>}

            <button onClick={handleConfirm}>Conferma</button>

        </div>

    </div>
    )
}

export default EditBook;