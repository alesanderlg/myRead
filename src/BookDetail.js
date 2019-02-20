import React, { PureComponent } from 'react'
import SelectBookShelf from './SelectBookShelf'
import PropTypes from 'prop-types'

class BookDetail extends PureComponent{

    render(){
        const { book, onSelectBookShelf } = this.props
        const selectBookShelf = (shelf) =>{
            onSelectBookShelf(book, shelf)
        }
        return(
            <div className="book">
            <div className="book-top">
                <div className="book-cover" 
                    style={{ 
                        width: 128, 
                        height: 193, 
                        backgroundImage: `url(${!book.imageLinks ? '': book.imageLinks.smallThumbnail})`
                    }}>
                </div>
                <SelectBookShelf shelf={book.shelf} selectBookShelf={selectBookShelf}/>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
        </div>

        )
    }
}

BookDetail.propType = {
    book: PropTypes.object.isRequired,
    onSelectBookShelf: PropTypes.func.isRequired
}

export default BookDetail