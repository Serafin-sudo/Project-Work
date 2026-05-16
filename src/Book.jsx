import "../src/Book.css"
import { useState, useEffect } from 'react';
import immagineTest from './immagine_test.jpg'
import EditBook from "./editBook";

function Book ({ book_data, utente, onDelete, onEdit }) {

    console.log("Book() ")

    const [showBookEdit, setShowBookEdit] = useState(false);

    return (
    <>
        <div className="card">
            <img
                className="card-img-top"
                src={`https://covers.openlibrary.org/b/isbn/${book_data.isbn}-L.jpg`}
                alt={book_data.title}
                onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = immagineTest;
                    }}
            />
            <div className="card-body">
                <p className="card-subtitle">{book_data.author}</p>
                <h5 className="card-title">{book_data.title}</h5>
                <p className="card-text">{book_data.description}</p>
                {utente && utente.admin == 1 && <button className="btn-del" onClick={() => onDelete(book_data.code)}>🗑️</button>}
                {utente && utente.admin == 1 && <button className="btn-edit" onClick={() => setShowBookEdit(true)}>📝</button>}
            </div>
        </div>
        {showBookEdit && (
            <EditBook
                onClose={() => setShowBookEdit(false)}
                onEdit={(newBookData) => onEdit(book_data.code, newBookData, () => setShowBookEdit(false))}
            />
        )}
    </>
    )
}

export default Book;