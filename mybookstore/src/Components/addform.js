import { React, useRef } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addBookApi } from '../Redux/Books/books';

const AddForm = () => {
  const titleInputRef = useRef();
  const categoryInputRef = useRef();
  const dispatch = useDispatch();

  // const tittleHandle = (element) => setTittle(element.target.value);
  // const authorHandle = (element) => setAuthor(element.target.value);
  // const categoryHandle = (element) => setCategory(element.target.value);
  // const clearTittle = () => setTittle('');
  // const clearAuthor = () => setAuthor('');

  function submitBookToStore(event) {
    event.preventDefault();
    const newBook = {
      item_id: nanoid(),
      title: titleInputRef.current.value,
      category: categoryInputRef.current.value,
    };
    dispatch(addBookApi(newBook));
    titleInputRef.current.value = '';
    categoryInputRef();
  }

  // dispatch(addBook(newBook));
  // clearTittle();
  // clearAuthor();

  const styleln = {
    width: '90%',
    margin: '20px 40px',
  };

  return (
    <>
      <hr style={styleln} />
      <div className='form-items'>
        <h2 className='form-header'>Add New Book</h2>
        <form action='#' className='ftn' onSubmit={submitBookToStore}>
          <input
            type='text'
            className='input name'
            id='title'
            ref={titleInputRef}
            placeholder='Book Title'
            required
          />
          <select
            className='input category'
            default
            value={category}
            id='category'
            name='category'
            ref={categoryInputRef}
          >
            <option hidden>Category</option>
            <option value='classic'>Classic</option>
            <option value='fantasy'>Fantasy</option>
            <option value='thriller'>Thriller</option>
            <option value='western'>Western</option>
            <option value='history'>History</option>
            <option value='romance'>Romance</option>
          </select>

          <button type='submit' className='input btn'>
            ADD BOOK
          </button>
        </form>
      </div>
    </>
  );
};

export default AddForm;
