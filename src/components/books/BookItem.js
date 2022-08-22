import "./BookItem.css";
import { Fragment } from "react";
import { update } from '../../api/BooksAPI.js';

function BookItem ( props ) {

    function selectHandler ( e ) {
        update( props.book, e.target.value );
        props.refresh();
    }

    return (
        <Fragment>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={ {
                            width: 128,
                            height: 193,
                            backgroundImage:
                                'url(' + `${ props.bookCover }` + ')',
                        } }
                    ></div>
                    <div className="book-shelf-changer">
                        <select onChange={ selectHandler }
                            value={ props.shelf }>
                            <option value="none" disabled>
                                Move to...
                            </option>
                            <option value="currentlyReading">
                                Currently Reading
                            </option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{ props.title }</div>
                <div className="book-authors">{ props.author }</div>
            </div>
        </Fragment> );
}

export default BookItem;