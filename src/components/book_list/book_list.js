import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BookItem from './book_list_item';
import Books from '../../books';
import bookCss from './book.scss';
// import { useState } from 'react/cjs/react.production.min';

// function createBook(item) {
//     return (
//         <BookItem
//             id={item.id}
//             key={item.id}
//             name={item.name}
//             img={item.imgURL}
//             description={item.description}
//             date={item.date}
//         />
//     )
// }

const BookList = () => {  // Create component for Book listing

    const [searchText, setSearchText] = useState("");

    function handleChange(event) {
        setSearchText(event.target.value);
    }

    const [itemValue, setItemValue] = useState([]);
    function viewData(book) {
        setItemValue(book);
    }

    return (
        <Container>
            <Row className='mb-4'>
                <Col>
                    <h1 className='mb-0'>Book library</h1>
                </Col>
                <Col>
                    <form className='d-flex justify-content-end'>
                        <div className="form-group mx-2">
                            <input type="text" className="form-control" placeholder="Search" onChange={handleChange} value={searchText} />
                        </div>
                        <div className="form-group">
                            <select className="form-control">
                                <option selected>Sort</option>
                                <option>Ascending</option>
                                <option>Descending</option>
                            </select>
                        </div>
                    </form>
                </Col>
            </Row>
            <Row>
                {/* {Books.map(createBook)} */}
                {Books.map((item) => (
                    <BookItem
                        id={item.id}
                        key={item.id}
                        name={item.name}
                        img={item.imgURL}
                        description={item.description}
                        date={item.date}
                        onAdd={viewData}
                    />
                ))}
            </Row>
            <div className="book-detail-wrapper" id={'test'+ itemValue.id}>
                <div className="book-img">
                    <img src={itemValue.img} alt="book1" />
                </div>
                <h2>{itemValue.name}</h2>
                <div className="date">{itemValue.date}</div>
                <p>{itemValue.description}</p>
            </div>
        </Container>
    )
}
export default BookList;