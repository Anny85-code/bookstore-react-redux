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
          <li className='last-row'>Comments </li>
          <li
            className='last-row2'
            type='button'
            onClick={() => handleRemoveBook(item_id)}
          >
            Remove
          </li>
          <li className='last-row3'>Edit</li>
        </ul>
      </div>
      <div className='circle-div'>
        <div>
          <CircularProgressbar value={percentage} />
        </div>
        <div className='percentage-cn'>
          <span className='p-counter'>{`${percentage}%`}</span> Completed
        </div>
      </div>

      <hr />
      <div className='current-c'>
        <ul>
          <li className='left-row top'>Current Chapter</li>
          <li className='left-row bottom'>Chapter 17</li>
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
