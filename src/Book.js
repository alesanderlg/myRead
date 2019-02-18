import React from 'react'
import BookDetail from './BookDetail'
import PropTypes from 'prop-types'

const Book = ({ book, onSelectBookShelf }) =>{
    return(
        <li>    
            <BookDetail book={book} onSelectBookShelf={onSelectBookShelf}/>
        </li>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onSelectBookShelf: PropTypes.func.isRequired
}

export default Book