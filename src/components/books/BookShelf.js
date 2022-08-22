import './BookShelf.css';
import { Fragment } from "react";
import BookItem from "./BookItem";

function BookShelf ( props ) {

    const books = props.books.map( ( book ) => {
        return ( <BookItem key={ book.id }
            refresh={ props.refresh }
            book={ book }
            id={ book.id }
            bookCover={ book.imageLinks?.thumbnail }
            shelf={ book.shelf }
            author={ book.authors }
            title={ book.title }
            shelfCat={ props.shelfCat }
        /> );
    } );

    return (
        <Fragment>
            <div className="bookshelf">
                <h2 className="bookshelf-title">{ props.shelfTitle }</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        { books }
                    </ol>
                </div>
            </div>

        </Fragment> );
}

export default BookShelf;