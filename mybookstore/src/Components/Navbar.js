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
          <li>
            <Link to='./'>BOOKS</Link>
          </li>
          <li>
            <Link to='./category'>CATEGORIES</Link>
          </li>
          <li>
            <ImUser />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
