
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Searchbook from './components/Searchbook';
import BookGallery from './components/BookGallery';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Searchbook/>} />
        <Route path="/BookGallery" element={<BookGallery />} />
      </Routes>
    </Router>
  );
};

export default App;
