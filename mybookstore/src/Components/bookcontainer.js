import React from 'react';
import Addform from './addform';
import Booklist from './booklist';

const BooksContainer = () => {
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
      <Booklist />
      <hr />
      <Addform />
    </div>
  );
};

export default BooksContainer;
