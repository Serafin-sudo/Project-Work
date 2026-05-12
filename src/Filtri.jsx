import { useState } from 'react';

function Filtri ({ onFilter }) {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');

    const handleFilter = async (title, author, genre) => {
        const params = new URLSearchParams();
        if (title) params.append('title', title);
        if (author) params.append('author', author);
        if (genre) params.append('genre', genre);

        const res = await fetch(`http://localhost:3001/Library?${params.toString()}`);
        const data = await res.json();
        onFilter(Array.isArray(data) ? data : []);
    };

    return(
    <div>
        <div className='filtri'>
            <input
                type="text"
                placeholder="Titolo.."
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value);
                    handleFilter(e.target.value, author, genre);
                }}
            />
            <input
                type="text"
                placeholder="Autore.."
                value={author}
                onChange={(e) => {
                    setAuthor(e.target.value);
                    handleFilter(title, e.target.value, genre);
                }}
            />
            <input
                type="text"
                placeholder="Genere.."
                value={genre}
                onChange={(e) => {
                    setGenre(e.target.value);
                    handleFilter(title, author, e.target.value);
                }}
            />
        </div>
    </div>
    )
}

export default Filtri;