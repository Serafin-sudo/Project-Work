import { useEffect, useState } from 'react'
import axios from 'axios'
import Book from './book'
import "./BooksGrid.css"

function BooksGrid() {

    console.log("BooksGrid()");

    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function fetchBooks() {
            try
            {
                const response = await axios.get("http://localhost:3001/Library");
                console.log("------")
                console.log("response.data:", response.data);
                console.log("tipo:", typeof response.data);
                console.log("------")

                setBooks(response.data);
            }
            catch(error)
            {
                console.log(error);
            }
        }
        fetchBooks();
    }, [])
        
    
    

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

export default BooksGrid