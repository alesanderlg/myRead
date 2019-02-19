import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'
import DashBoard from './DashBoard'
import SearchBook from './SearchBook'
class BooksApp extends React.Component {

  state = {
    myBooks:[],
    searchBooks: [],
  }

  componentDidMount(){
    BooksAPI.getAll().then((myBooks) =>{
      this.setState(() =>({
        myBooks
      }))
    }).catch((err) => {
      console.error('err', err);
    });
  }

  componentDidUpdate(){
    BooksAPI.getAll().then((myBooks) =>{
      this.setState(() =>({
        myBooks
      }))
    }).catch((err) => {
      console.error('err', err);
    });
  }

  changeBookShelf = (book, shelf) => {
    BooksAPI.update(book,shelf)
  }

  clearState = () => {
    this.setState({showingBooks:[]})
  }

  containsShelf = (myBooks, searchBooks) =>{
    for (let bookSearch of searchBooks) {
      for (let myBook of myBooks) {
        if(myBook.id === bookSearch.id){
          bookSearch.shelf = myBook.shelf
        }
      }
    }
    return searchBooks
  }

  onSearchBook = query =>{
    query !== "" ? 
    (
      BooksAPI.search(query).then((searchBooks) =>{
          if(!searchBooks || searchBooks.error){
            this.setState({searchBooks:[]})
          }
          else if(Array.isArray(searchBooks)){
            this.setState(() =>({
              searchBooks: this.containsShelf(this.state.myBooks, searchBooks)
            }))
          }
      })
    ) 
    : 
    this.setState({searchBooks:[]})
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={()=>(
          <DashBoard 
            allBooks={this.state.myBooks} 
            onSelectBookShelf={this.changeBookShelf}/>
        )}/>
        <Route path='/search' render={() => (
          <SearchBook 
            onSearchBook={this.onSearchBook} 
            searchBooks={this.state.searchBooks} 
            onSelectBookShelf={this.changeBookShelf}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
