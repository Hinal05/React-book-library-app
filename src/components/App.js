import React from "react";

import Form from './form/form'; // Import login and register form
import Header from './header/header'; // Import header component
import Footer from './footer/footer'; // Import footer component
import BookList from './book_list/book_list'; // Import Book list component

var userIsRegistered = true;

function App() {
    return (
      <section>
        {/* <div className="login-wrapper">
            <Form isRegistered={userIsRegistered} />
        </div> */}
        <Header/>
        <div className='content-wrap'>
          <BookList />
        </div>
        <Footer/>
      </section>
    )
  }

  export default App;