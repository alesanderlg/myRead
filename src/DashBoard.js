import React, { PureComponent } from 'react'
import DashBoardTitle from './DashBoardTitle'
import BookShelf from './BookShelf'
import Button from './Button';
import PropTypes from 'prop-types'

class DashBoard extends PureComponent{
    render(){
        const { allBooks, onSelectBookShelf } = this.props
        return (
            <div className='list-books'>
                <div className="list-books-content">
                    <DashBoardTitle title='MyReads'/>
                        <BookShelf 
                            title='Currently reading'
                            allBooks={allBooks} 
                            shelf='currentlyReading' 
                            onSelectBookShelf={onSelectBookShelf}
                        />  
                        <BookShelf 
                            title='Want to read'
                            allBooks={allBooks} 
                            shelf='wantToRead'
                            onSelectBookShelf={onSelectBookShelf} 
                        /> 
                        <BookShelf 
                            title='Read' 
                            allBooks={allBooks} 
                            shelf='read' 
                            onSelectBookShelf={onSelectBookShelf} 
                        />                  
                </div>   
                <Button className='open-search' linkTo='/search' name='Add a Book'/>                          
            </div>
        )
    }
}

DashBoard.propTypes = {
    allBooks: PropTypes.array.isRequired,
    onSelectBookShelf: PropTypes.func.isRequired
}

export default DashBoard
