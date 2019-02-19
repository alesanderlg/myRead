import React from 'react'
import Book from './Book'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer';

describe('<Book />', () => {
    let props;
    let wrapper;

    beforeEach(() => {
        props = {
            onSelectBookShelf: jest.fn(() => 'onSelectBookShelf'),
            "book": {
              title: 'Artificial Intelligence',
              authors: 'Stuart Jonathan',
              shelf: 'read',
              imageLinks: {
                  smallThumbnail: 'http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api'
              }
          }
          };
          wrapper = shallow(<Book {...props} />);
      
    });

    it('should renders without crashing', () => {
        expect(wrapper).toBeDefined();
    });

    it('should renders correctly', () => {
        const tree = renderer.create(<Book {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
})
