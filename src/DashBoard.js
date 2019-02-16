import React, { Component } from 'react'
import DashBoardTitle from './DashBoardTitle'
import BookShelf from './BookShelf'

class DashBoard extends Component{
    render(){
        const allBooks = this.props.allBooks
        return (
            <div className='list-books'>
                <div className="list-books-content">
                    <DashBoardTitle title='MyReads'/>
                    <BookShelf allBooks={allBooks} shelf='currentlyReading' title='Currently reading'/>  
                    <BookShelf allBooks={allBooks} shelf='wantToRead' title='Want to read'/> 
                    <BookShelf allBooks={allBooks} shelf='read' title='Read'/>                  
                </div>              
            </div>
        )
    }
}

export default DashBoard
