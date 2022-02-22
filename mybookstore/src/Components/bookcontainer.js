import React from 'react';
import Addform from './addform';
import Booklist from './booklist';

const BooksContainer = () => {
  const styleln = {
    width: '90%',
    margin: '20px 40px',
  };
  return (
    <div className='main-display'>
      <Booklist />
      <hr style={styleln} />
      <Addform />
    </div>
  );
};

export default BooksContainer;
