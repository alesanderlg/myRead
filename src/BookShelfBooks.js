import React from 'react'
import Book from './Book';
import PropTypes from 'prop-types'

const BookShelfBooks = ({ booksOnShelf, onSelectBookShelf}) =>{
    return(
        <ol className="books-grid">  
            {booksOnShelf.map((book) =>(
                <Book key={book.id} book={book} onSelectBookShelf={onSelectBookShelf}/>
            ))}
        </ol>
    )
}

BookShelfBooks.propTypes = {
    booksOnShelf: PropTypes.array.isRequired,
    onSelectBookShelf: PropTypes.func.isRequired
}

export default BookShelfBooks