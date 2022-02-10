import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header/header'; // Import header component
import Footer from './components/footer/footer'; // Import footer component
import BookList from './components/book_list/book_list'; // Import Book list component

const App =  () => {
  return (
    <section>
      <Header/>
      <BookList />
      <Footer/>
    </section>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);