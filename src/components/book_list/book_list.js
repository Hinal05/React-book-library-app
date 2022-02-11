import React from 'react';
import BookItem from './book_list_item';
import Books from '../../books';

function createBook(item) {
    return (
        <BookItem
            id={item.id}
            key={item.id}
            name={item.name}
            img={item.imgURL}
            description={item.description}
            date={item.date}
        />
    )
}

const BookList = () => {  // Create component for Book listing
    return (
        <div className='container'>
            <div className='row'>
                {Books.map(createBook)}
            </div>
        </div>
    )
}
export default BookList;