import "./Book.css"
import bookCoverEmpty from "../src/assets/imgs/bookCoverEmpty.png";

function Book ({ book_data }) {

    console.log("Book() ")

    return (
        <div className="bookCard">
            <img className="bookCoverEmpty" src={bookCoverEmpty} alt="ERRORE!"  />
            <p className="bookTitle">{book_data.title}</p>
        </div>
    )
}

export default Book;