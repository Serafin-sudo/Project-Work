import '../src/Book.css'
import '../src/App.css'
import { useState, useEffect } from 'react';
import immagineTest from './immagine_test.jpg'
import EditBook from './editBook';

function Book ({ book_data, utente, onDelete, onEdit }) {

    console.log('Book() ')

    const [showBookEdit, setShowBookEdit] = useState(false);
    const [showBookInfo, setShowBookInfo] = useState(false);

    return (
    <>
        <div className='card'>
            <img
                className='card-img-top'
                src={`https://covers.openlibrary.org/b/isbn/${book_data.isbn}-L.jpg`}
                alt={book_data.title}
            />
            <div className='card-body'>
                <p className='card-subtitle'>{book_data.author}</p>
                <h5 className='card-title'>{book_data.title}</h5>
                {utente && utente.admin == 1 && <button className='btn-del' onClick={() => onDelete(book_data.code)}>🗑️</button>}
                {utente && utente.admin == 1 && <button className='btn-edit' onClick={() => setShowBookEdit(true)}>📝</button>}
                <button className='btn-info' onClick={() => setShowBookInfo(true)}>ℹ️</button>
            </div>
        </div>
        {showBookEdit && (
            <EditBook
                onClose={() => setShowBookEdit(false)}
                onEdit={(newBookData) => onEdit(book_data.code, newBookData, () => setShowBookEdit(false))}
            />
        )}
        {showBookInfo && (
            <div className='overlay' onClick={() => setShowBookInfo(false)}>

                <div className='overlay_box'>

                    <button className='overlay_x' onClick={() => setShowBookInfo(false)}>✕</button>

                    <h4>{book_data.author}</h4>
                    <h3>{book_data.title}</h3>
                    <p>{book_data.description}</p>
                    <h5>code: {book_data.code} | isbn: {book_data.isbn}</h5>

                </div>
            </div>
        )}
    </>
    )
}

export default Book;