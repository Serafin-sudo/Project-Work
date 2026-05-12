import "../src/Book.css"
import immagineTest from './immagine_test.jpg'

function Book ({ book_data }) {

    console.log("Book() ")

    return (
    <div className="card">
    <img className="card-img-top" src={immagineTest} alt={book_data.title} />
        <div className="card-body">
            <p className="card-subtitle">{book_data.author}</p>
            <h5 className="card-title">{book_data.title}</h5>
            <p className="card-text">{book_data.description}</p>
            <button className="btn-primary">Button</button>
        </div>
    </div>
    )
}

export default Book;