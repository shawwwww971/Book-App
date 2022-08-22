import "./Books.css";
import { Fragment } from "react";
import BookShelf from "./BookShelf";

function Books ( props ) {

    const bookShelfs = [
        {
            shelfTitle: 'Currently Reading',
            shelfCat: 'currentlyReading',
            shelfBooks: [],
        },
        {
            shelfTitle: 'Want To Read',
            shelfCat: 'wantToRead',
            shelfBooks: [],
        },
        {
            shelfTitle: 'Read',
            shelfCat: 'read',
            shelfBooks: [],
        },
    ];

    //adding books to shelfs
    for ( const bookShelf of bookShelfs )
    {
        const books = props.allBooks.map( ( book ) => book )
            .filter( ( bookItem ) => bookItem.shelf === bookShelf.shelfCat );

        bookShelf.shelfBooks.push( ...books );
    }

    // extract shelfs
    const shelfs = bookShelfs.map( ( bookShelf ) => {
        return <BookShelf key={ bookShelf.shelfCat }
            refresh={ () => props.refresh() }
            shelfCat={ bookShelf.shelfCat }
            shelfTitle={ bookShelf.shelfTitle }
            books={ bookShelf.shelfBooks } />;
    } );

    return (
        <Fragment>
            <div className="list-books-content">
                <div>
                    { shelfs }
                </div>
            </div>
        </Fragment>
    );
}

export default Books;