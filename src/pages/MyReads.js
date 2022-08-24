import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAll } from "../api/BooksAPI";
import Books from "../components/books/Books";

function MyReads () {
    const [ allBooks, setAllBooks ] = useState( [] );
    const [ flip, setFlip ] = useState( true );

    function refreshPage () {
        setFlip( !flip );
    }

    //get All Books
    async function getBooks () {
        const books = await getAll();
        setAllBooks( books );
        setFlip( !flip );
    }

    useEffect( () => {
        getBooks();
    }, [ flip ] );

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <Books flip={ refreshPage } allBooks={ allBooks } />
            <div className="open-search">
                <Link to='search'>Add a book</Link>
            </div>
        </div>
    );
}

export default MyReads;