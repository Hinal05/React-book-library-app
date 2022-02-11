import React from 'react';

const BookItem = (props) => {  // Create component for Book item
    return (
        <div className='col-sm-3 mb-3'>
            <div className='book-detail'>
                <div className='book-img'>
                    <img src={props.img} alt='book1' />
                </div>
                <h2>{props.name}</h2>
                <div className='date'>{props.date}</div>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
export default BookItem;