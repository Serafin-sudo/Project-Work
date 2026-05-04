import "../src/Book.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import immagineTest from './immagine_test.jpg'

function Book ({ book_data }) {

    console.log("Book() ")

    return (
    <Card>
        <Card.Img variant="top" src={immagineTest} />
        <Card.Body>
            <Card.Title>{book_data.title}</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
    )
}

export default Book;