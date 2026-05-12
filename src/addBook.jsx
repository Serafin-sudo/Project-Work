import { useState } from "react";
import axios from "axios";

function AddBook() {

    const [form, setForm] = useState({
        title: "",
        author: "",
        year: "",
        genre: "",
        availableCopies: "",
        totalCopies: "",
        code: "",
        isbn: ""
    });

    const [message, setMessage] = useState("");

    function handleChange(e) {
        setForm({
        ...form,
        [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e) {
        
        e.preventDefault();

        try {
            console.log(form.title)
            const response = await axios.post(
                "http://localhost:3001/Library",
                {
                ...form,
                year: Number(form.year),
                availableCopies: Number(form.availableCopies),
                totalCopies: Number(form.totalCopies),
                code: Number(form.code),
                isbn: Number(form.isbn)
                }
            );

            setMessage(response.data.message);
            console.log(response.data);

            setForm({
                title: "",
                author: "",
                year: "",
                genre: "",
                availableCopies: "",
                totalCopies: "",
                code: "",
                isbn: ""
            });

        } catch (err) {
            console.error(err);
        }
    }

    return (
    <section>
    <h2>Add Book (solo admin hehehe)</h2>
    <form onSubmit={handleSubmit}>
        <input name="title" placeholder="title" value={form.title} onChange={handleChange} />
        <input name="author" placeholder="author" value={form.author} onChange={handleChange} />
        <input name="year" placeholder="year" value={form.year} onChange={handleChange} />
        <input name="genre" placeholder="genre" value={form.genre} onChange={handleChange} />
        <input name="availableCopies" placeholder="availableCopies" value={form.availableCopies} onChange={handleChange} />
        <input name="totalCopies" placeholder="totalCopies" value={form.totalCopies} onChange={handleChange} />
        <input name="code" placeholder="Code (unique)" value={form.code} onChange={handleChange} />
        <input name="isbn" placeholder="ISBN" value={form.isbn} onChange={handleChange} />

        <button type="submit">Add Book</button>
    </form>

    {message && <p>{message}</p>}
    </section>
    );
}

export default AddBook;