import React from 'react';
import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

const Navbar = () => {
  

  return (
    <div>
      <nav className='nav-bar'>
        <h1 className='main-heading'>
          Bookstore<span className='cms'>CMS</span>{' '}
        </h1>
        <ul className='nav-ul'>
          <li className='link'>
            <Link to='./'>Books</Link>
          </li>
          <li className='link2'>
            <Link to='/categories'>Categories</Link>
          </li>
          <li className='cont-icon'>
            <div className='image'>
              <ImUser />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
