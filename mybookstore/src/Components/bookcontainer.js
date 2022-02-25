import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddForm from './addform';
import BookItem from './bookitems';
import { getBooks } from '../Redux/Books/books';

const BooksContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  const books = useSelector((state) => state.booksReducer);

  return (
    <div className='main-display'>
      {books.map((book) => (
        <div key={book.item_id}>
          <BookItem props={book} />
          <br />
        </div>
      ))}

      <AddForm />
    </div>
  );
};

export default BooksContainer;
