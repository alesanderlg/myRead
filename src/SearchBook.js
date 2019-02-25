import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelfBooks from './BookShelfBooks'
import PropTypes from 'prop-types'
import { DebounceInput } from 'react-debounce-input';

class SearchBook extends Component{

    state = {
        query: ''
    }

    updateQuery = (query) =>{
        this.setState(() =>({
            query: query
        }))
        this.props.onSearchBook(query)
    }

    render(){
        const { query } = this.state
        const { searchBooks, onSelectBookShelf } = this.props
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link 
                        className='close-search'
                        to='/'
                    >Close</Link>
                    <div className="search-books-input-wrapper">
                    <DebounceInput
                        value={query}
                        minLength={2}
                        placeholder="Search by title or author"
                        debounceTimeout={300}
                        onChange={(event) => this.updateQuery(event.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <BookShelfBooks booksOnShelf={searchBooks} onSelectBookShelf={onSelectBookShelf}/>
                </div>
          </div>
        )
    }
}

SearchBook.propTypes = {
    onSearchBook: PropTypes.func.isRequired,
    searchBooks: PropTypes.array.isRequired,
    onSelectBookShelf: PropTypes.func.isRequired
}

export default SearchBook