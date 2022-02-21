import React from 'react';

const Addform = () => {
  return (
    <div>
      <h2>Add New Book</h2>
      <form action='#'>
        <input type='text' placeholder='Book Title' />
        <input type='text' placeholder='Category' />
        <input type='submit' className='input-btn' placeholder='Add Book' />
      </form>
    </div>
  );
};

export default Addform;
