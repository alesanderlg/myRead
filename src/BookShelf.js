import React, { PureComponent } from 'react'
import BookShelfBooks from './BookShelfBooks';
import PropTypes from 'prop-types'

class BookShelf extends PureComponent{
    render(){
        const { title, allBooks, shelf, onSelectBookShelf } = this.props
        const filterBy = shelf => allBooks.filter( book => {
            return book.shelf === shelf
        })    
        const booksOnShelf = filterBy(shelf)
        return(
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{title}</h2>
                    <div className="bookshelf-books">        
                        <BookShelfBooks booksOnShelf={booksOnShelf} onSelectBookShelf={onSelectBookShelf}/>       
                    </div>                  
                </div>
            </div>
        )
    }
}

BookShelf.propTypes = {
    title: PropTypes.string.isRequired,
    allBooks: PropTypes.array.isRequired,
    shelf: PropTypes.string.isRequired,
    onSelectBookShelf: PropTypes.func.isRequired
}

export default BookShelf