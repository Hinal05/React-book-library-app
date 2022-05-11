import React, {useState} from 'react';
import { Col } from 'react-bootstrap';
import ShortShow from './short_content';
import bookCss from './book.scss';

function BookItem(props) {  // Create component for Book item

    const [book, setBook] = useState(props);

    function ReadMore(id) {
        const bookId = book.id;
        setBook(book);
        props.onAdd(book);
        id.preventDefault();
    }

    return (
        <Col sm="3">
            <div className='book-detail'>
                <div className='book-img'>
                    <img src={props.img + "?grayscale"} alt='book1' />
                </div>
                <h2>{props.name}</h2>
                <div className='date'>{props.date}</div>
                {/* <p>{props.description}</p> */}
                <ShortShow shortContent={props.description} />
                <a href='#' onClick={ReadMore}>Start Read</a>
            </div>
        </Col>
    )
}

export default (BookItem);