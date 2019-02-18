import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SelectBookShelf extends Component{
    
    state = {
        selectValue: !this.props.shelf ? 'none'  : this.props.shelf
    }

    handleChange = selectValue =>{
        this.setState({
            selectValue
        })
        this.props.selectBookShelf(selectValue)
    }

    render(){
        return(
            <div className="book-shelf-changer">
                <select value={this.state.selectValue} onChange={(event) => this.handleChange(event.target.value)}>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
            </div>
        )
    }
}

SelectBookShelf.propTypes = {
    shelf: PropTypes.string.isRequired,
    selectBookShelf: PropTypes.func.isRequired
}

SelectBookShelf.defaultProps = {
    selectValue: 'none'
}

export default SelectBookShelf