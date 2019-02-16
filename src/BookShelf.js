import React, { Component } from 'react'
import BookShelfBooks from './BookShelfBooks';

class BookShelf extends Component{
    render(){
        const allBooks = this.props.allBooks
        const filter = books => shelf => allBooks.filter( book => {
            return book.shelf === shelf
        })
        const filterBy = filter(allBooks)
        const booksOnShelf = filterBy(this.props.shelf)

        return(
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{this.props.title}</h2>
                    <div className="bookshelf-books">        
                        <BookShelfBooks booksOnShelf={booksOnShelf}/>       
                    </div>                  
                </div>
            </div>
        )
    }
}

export default BookShelf