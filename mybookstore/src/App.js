import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/configureStore';
import Navbar from './Components/Navbar';
import BooksContainer from './Components/bookcontainer';
import Categories from './pages/categories';
import './index.css';

function App() {
  return (
    <div className='overall-container'>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path='/' element={<BooksContainer />} />
          <Route path='/categories' element={<Categories />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
