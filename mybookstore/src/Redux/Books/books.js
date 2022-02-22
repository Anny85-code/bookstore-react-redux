import React from 'react';

const books = () => {
  const numb = document.getElementsByClassName('.number');
  let counter = 0;
  setInterval(() => {
    if (counter === 100) {
      clearInterval();
    } else {
      counter += 1;
      numb.textContent = counter + '%';
    }
  }, 80);

  return (
    <div className='main-display'>
      <div className='books'>
        <ul>
          <li className='title'>Action</li>
          <li className='book-name'>The Hunger game</li>
          <li className='author'>Suzanne Collins</li>
        </ul>
        <ul>
          <li className='last-row'>Comments |</li>
          <li className='last-row'>Remove |</li>
          <li className='last-row'>Edit</li>
        </ul>
      </div>

      <div class='circular'>
        <div class='inner'></div>
        <div class='number'>100%</div>
        <div class='circle'>
          <div class='bar left'>
            <div class='progress'></div>
          </div>
          <div class='bar right'>
            <div class='progress'></div>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <ul>
          <li>Current Chapter</li>
          <li>Chapter 17</li>
        </ul>
        <button type='submit'>Update Progress</button>
      </div>
      <hr />
      <div>
        <h2>Add New Book</h2>
        <form action='#'>
          <input type='text' placeholder='Book Title' />
          <input type='text' placeholder='Category' />
          <input type='submit' className='input-btn' placeholder='Add Book' />
        </form>
      </div>
    </div>
  );
};

export default books;
