import React, {useState} from 'react';
import { Col } from 'react-bootstrap';
import ShortShow from './short_content';
import bookCss from './book.scss';

function BookItem(listItem) {  // Create component for Book item

    const [book, setBook] = useState(listItem);

    function ReadMore(id) {
        const bookId = book.listItem.id;
        setBook(book.listItem);
        listItem.onAdd(book.listItem);
        id.preventDefault();
    }

    return (
        <Col sm="3" className='mb-4'>
            <div className='book-detail'>
                <div className='book-img'>
                    <img src={listItem.listItem.imgURL + "?grayscale"} alt='book1' />
                </div>
                <h2>{listItem.listItem.name}</h2>
                <div className='date'>{listItem.listItem.date}</div>
                <ShortShow shortContent={listItem.listItem.description} />
                <a href='#' onClick={ReadMore}>Start Read</a>
            </div>
        </Col>
    )
}

export default (BookItem);