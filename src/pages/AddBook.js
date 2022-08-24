import './AddBook.css';
import { Fragment, useState, useEffect } from 'react';
import { search, get } from '../api/BooksAPI';
import { Link } from 'react-router-dom';
import BookItem from '../components/books/BookItem';
import LoadingSpinner from '../components/ui/LoadingSpinner';

function AddBook ( props ) {
    const [ inputText, setInputText ] = useState( '' );
    const [ allBooks, setAllBooks ] = useState( [] );
    const [ loadedBooks, setLoadedBooks ] = useState( [] );
    const [ loadingSpinner, setLoadingSpinner ] = useState( false );

    function inputHandler ( e ) {
        setInputText( e.target.value );
    }

    // get books
    async function searchBooks () {
        if ( inputText === "" )
        {
            setLoadedBooks( [] );
            return;
        };

        setLoadingSpinner( true );
        const books = await search( inputText );
        setAllBooks( books );
        if ( books.error ) return;
        ///////////////////////////////////////////
        const booksId = books.map( book => book.id );
        const loadedBookss = [];
        for ( let i = 0; i < booksId.length; i++ )
        {
            const book = await get( booksId[ i ] );
            loadedBookss.push( book );
        }
        console.log( loadedBooks );
        setLoadedBooks( loadedBookss );
        setLoadingSpinner( false );
    }
    useEffect( () => {
        searchBooks();
    }, [ inputText ] );

    //render books
    let books;
    if ( allBooks.error )
    {
        books = <h2> not found</h2>;
    } else
    {
        books = loadedBooks.map( ( book ) => {
            return ( <BookItem key={ book.id }
                book={ book }
                id={ book.id }
                bookCover={ book.imageLinks?.thumbnail }
                shelf={ book.shelf }
                author={ book.authors }
                title={ book.title }
                shelfCat={ props.shelfCat }
                flip={ () => { } }
            /> );
        } );
    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link
                    className="close-search"
                    to='/'
                >Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        onChange={ inputHandler }
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                    />
                </div>
            </div>
            { !loadingSpinner &&
                <div className="search-books-results">
                    <ol className="books-grid">{ books }</ol>
                </div> }
            { loadingSpinner && <LoadingSpinner />
            }
        </div>
    );
}

export default AddBook;