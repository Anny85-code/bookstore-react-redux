import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../Redux/Books/books';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const BookItem = ({ props }) => {
  const { item_id, category, title } = props;

  const dispatch = useDispatch();

  const handleRemoveBook = (item_id) => {
    dispatch(deleteBook(item_id));
  };

  const percentage = 66;

  return (
    <div className='book-container'>
      <div className='books'>
        <ul>
          <li className='title category'>{category}</li>
          <li className='book-name'>{title}</li>
        </ul>
        <ul className='last-row-container'>
          <li className='last-row'>Comments |</li>
          <li
            className='last-row'
            type='button'
            onClick={() => handleRemoveBook(item_id)}
          >
            Remove |
          </li>
          <li className='last-row'>Edit</li>
        </ul>
      </div>
      <div style={{ width: 70, height: 70 }}>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />;
      </div>

      <hr />
      <div>
        <ul>
          <li className='left-row top'>Current Chapter</li>
          <li className='left-row'>Chapter 17</li>
        </ul>
        <button className='left-row-btn' type='submit'>
          Update Progress
        </button>
      </div>
    </div>
  );
};
BookItem.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  props: PropTypes.arrayOf.isRequired,
};

export default BookItem;
