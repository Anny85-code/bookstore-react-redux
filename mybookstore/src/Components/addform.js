import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../Redux/Books/books';

const AddForm = () => {
  const [tittle, setTittle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const tittleHandle = (element) => setTittle(element.target.value);
  const authorHandle = (element) => setAuthor(element.target.value);
  const categoryHandle = (element) => setCategory(element.target.value);
  const clearTittle = () => setTittle('');
  const clearAuthor = () => setAuthor('');

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      tittle,
      category,
      author,
      id: uuidv4(),
    };

    dispatch(addBook(newBook));
    clearTittle();
    clearAuthor();
  };

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
            value={tittle}
            onChange={tittleHandle}
            placeholder='Book Title'
            required
          />
          <input
            type='text'
            className='input author'
            value={author}
            onChange={authorHandle}
            placeholder='Book Author'
            required
          />
          <select
            className='input category'
            default
            value={category}
            id='category'
            name='category'
            onChange={categoryHandle}
          >
            <option hidden>Category</option>
            <option value='classic'>Classic</option>
            <option value='fantasy'>Fantasy</option>
            <option value='thriller'>Thriller</option>
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
