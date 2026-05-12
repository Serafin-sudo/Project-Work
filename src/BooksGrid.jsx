import Book from './book.jsx'
import "../src/booksGrid.css"

function BooksGrid({ books }) {

    console.log("BooksGrid()");

    return (
        <div className="booksGrid">
            {
            books.map((book) => (
                <Book key={book._id} book_data={book} />
            ))
            }
        </div>
    )
}

export default BooksGrid;