import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const BookItems = () => {
  const percentage = 66;

  return (
    <div className='book-container'>
      <div className='books'>
        <ul>
          <li className='title'>Action</li>
          <li className='book-name'>The Hunger game</li>
          <li className='author'>Suzanne Collins</li>
        </ul>
        <ul className='last-row-container'>
          <li className='last-row'>Comments |</li>
          <li className='last-row'>Remove |</li>
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

export default BookItems;
