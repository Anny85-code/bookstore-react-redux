import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import BooksContainer from './Components/bookcontainer';
import Categories from './pages/categories';
import './index.css';

function App() {
  return (
    <div className='main-display'>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<BooksContainer />} />
        <Route path='/categories' element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
