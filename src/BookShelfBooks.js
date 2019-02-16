import React, { Component } from 'react'
import Book from './Book';

class BookShelfBooks extends Component{
    render(){
        const booksOnShelf = this.props.booksOnShelf
        return(
            <ol className="books-grid">  
                {booksOnShelf.map((book) =>(
                    <Book key={book.id} book={book}/>
                ))}
            </ol>
        )
    }
}
export default BookShelfBooks