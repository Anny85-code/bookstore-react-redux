import React from 'react';

const Addform = () => {
  return (
    <div className='form-items'>
      <h2 className='form-header'>Add New Book</h2>
      <form action='#' className='ftn'>
        <input type='text' className='input name' placeholder='Book Title' />
        <input type='text' className='input category' placeholder='Category' />
        <button type='submit' className='input btn'>
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default Addform;
