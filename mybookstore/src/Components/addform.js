import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Addform = () => {
  const titleHandle = (e) => {
    setTitle(e.target.value);
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      title,
      category: 'category',
      author,
      chapter: 0,
      id: uuidv4(),
    };
    e.target.reset();
    dispatch(addBook(newBook));
  };

  return (
    <div className='form-items'>
      <h2 className='form-header'>Add New Book</h2>
      <form action='#' className='ftn' onSubmit={submitBookToStore}>
        <input
          type='text'
          className='input name'
          onChange={titleHandle}
          placeholder='Book Title'
          required
        />
        <select disabled className='input category'>
          <option value='category'>Category</option>
        </select>
        <button type='submit' className='input btn'>
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default Addform;
