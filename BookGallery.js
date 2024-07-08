import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Searchbook.css'; 
import pagenotfound from 'D:/ANJANA AS PROJECTS/bookgallery/books/src/assets/pagenotfound.jpeg'; 
import './BookGallery.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookGallery = () => {
  const [bookgallery, setBookGallery] = useState([]);

  useEffect(() => {
    const storedBookGallery = localStorage.getItem('bookgallery');
    if (storedBookGallery) {
      setBookGallery(JSON.parse(storedBookGallery));
    }
  }, []);

  const removeFromBookGallery = (key, title) => {
    const updatedBookGallery = bookgallery.filter(book => book.key !== key);
    setBookGallery(updatedBookGallery);
    localStorage.setItem('bookgallery', JSON.stringify(updatedBookGallery));
    toast.error(`${title} removed from BookGallery!`);
  };

  return (
    <>
      <header>
        <nav>
          <h1><Link to="/" className="bookgallery-link">Back to Search</Link></h1>
        </nav>
      </header>

      <div className="container">
        {bookgallery.length === 0 ? (
          <p className='nobooks'>No books in your bookgallery. Add some books from the search page.</p>
        ) : (
          <div className="results-container">
            {bookgallery.map(book => (
              <div key={book.key} className="book-card">
                {book.cover_i ? (
                  <img 
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} 
                    alt={book.title} 
                    className="book-cover"
                  />
                ) : (
                  <img 
                    src={pagenotfound}
                    alt="No cover available" 
                    className="book-cover"
                  />
                )}
                <h3>{book.title}</h3>
                <p>Author: {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
                <button className='bookgallerybtn' onClick={() => removeFromBookGallery(book.key, book.title)}>Remove</button>
              </div>
            ))}
          </div>
        )}
      </div>
      <ToastContainer 
      position='top-center'
      
      
      />
    </>
  );
};

export default BookGallery;