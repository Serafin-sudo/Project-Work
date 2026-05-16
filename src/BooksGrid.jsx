import Book from './book.jsx'
import "../src/booksGrid.css"

function BooksGrid({ books, utente, onDelete, onEdit }) {

    console.log("BooksGrid()");

    return (
        <div className="booksGrid">
            {
            books.map((book) => (
                <Book key={book._id} book_data={book} utente={utente} onDelete={onDelete} onEdit={onEdit}/>
            ))
            }
        </div>
    )
}

export default BooksGrid;