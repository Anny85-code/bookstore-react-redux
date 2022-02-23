import React from 'react';
import { useSelector } from 'react-redux';
import AddForm from './addform';
import BookItem from './bookitems';

const BooksContainer = () => {
  const books = useSelector((state) => state.booksReducer);

  return (
    <>
      <div className='main-display'>
        {books.map((book) => (
          <div key={book.id}>
            <BookItem props={book} />
            <br />
          </div>
        ))}
      </div>
      <AddForm />
    </>
  );
};

export default BooksContainer;
