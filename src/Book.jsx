import "./Book.css"

function Book ({ book_data })
{

    console.log("Book() ")
    console.log(book_data)

    return (
        <div className="bookCard">
            <h1>{book_data.title}</h1>
        </div>
    )
}

export default Book;