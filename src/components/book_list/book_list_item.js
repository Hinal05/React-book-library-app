import React, {useState} from 'react';
import ShortShow from './short_content';

function BookItem(props) {  // Create component for Book item

    const [book, setBook] = useState(props);

    function ReadMore(id) {
        const bookId = book.id;
        setBook(book);
        props.onAdd(book);
        id.preventDefault();
    }

    return (
        <div className='col-sm-3 mb-3'>
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
        </div>
    )
}

export default (BookItem);