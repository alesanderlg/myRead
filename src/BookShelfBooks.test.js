import React from 'react'
import { shallow } from 'enzyme'
import BookShelfBooks from './BookShelfBooks'
import Book from './Book'

describe('<BookShelfBooks />', () =>{
    it('should render two <Book /> elements', () => {
        const booksOnShelf = [
            {
                id: "sJf1vQAACAAJ",
                shelf: "currentlyReading",
                title: "Learning Web Development with React and Bootstrap",
                authors: [
                    "Harmeet Singh",
                    "Mehul Bhatt"
                ],
                imageLinks: {
                    "smallThumbnail": "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                },

            },
            {
                id: "nggnmAEACAAJ",
                shelf: "currentlyReading",
                title: "The Linux Command Line",
                authors:  [
                    "William E. Shotts, Jr."
                ],
                imageLinks: {
                    "smallThumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                },

            }
            
        ]
        const onSelectBookShelf = jest.fn()
        const wrapper = shallow(<BookShelfBooks booksOnShelf={booksOnShelf} onSelectBookShelf={onSelectBookShelf}/>)
        expect(wrapper.find(Book)).toHaveLength(2)
        expect(wrapper.find(Book).get(0).props.book).toBe(booksOnShelf[0])
        expect(wrapper.find(Book).get(1).props.book).toBe(booksOnShelf[1])
        expect(wrapper.find(Book).get(0).key).toBe(booksOnShelf[0].id)
        expect(wrapper.find(Book).get(1).key).toBe(booksOnShelf[1].id)
    })

    it('should work with no <Book /> elements', () =>{
        const booksOnShelf = []
        const onSelectBookShelf = jest.fn()
        const wrapper = shallow(<BookShelfBooks booksOnShelf={booksOnShelf} onSelectBookShelf={onSelectBookShelf}/>)
        expect(wrapper.find(Book).length).toBe(0)
    })

})