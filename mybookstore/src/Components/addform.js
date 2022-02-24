import { React, useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addBookApi } from '../Redux/Books/books';

const AddForm = () => {
  const dispatch = useDispatch();

  const setup = () => ({
    item_id: '',
    title: '',
    category: '',
  });

  const [bookData, setBookData] = useState(setup());

  const changeHandler = (event) => {
    setBookData((prevState) => ({
      ...prevState,
      item_id: nanoid(),
      [event.target.name]: event.target.value,
    }));
  };

  const { title, category } = bookData;

  function submitBookToStore(event) {
    event.preventDefault();

    dispatch(addBookApi(bookData));
    setBookData(setup());
  }

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
            name='title'
            value={title}
            onChange={changeHandler}
            placeholder='Book Title'
            required
          />
          <select
            className='input category'
            default
            value={category}
            id='category'
            name='category'
            onChange={changeHandler}
          >
            <option hidden value=''>
              Category
            </option>
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
