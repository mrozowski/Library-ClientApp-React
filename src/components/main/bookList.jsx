import React, { Component } from 'react';
import Book from './book';

class BookList extends Component {
    state = { 
        book: [
            {
                id: 1,
                title: "Harry Potter",
                author: "J.K Rowling",
                rating: 4.3,
                popularity: 69,
                pages: 100,
                year: '2006-04-01',
                publisher: "Wrtnilg"
            },
            {
                id: 2,
                title: "Harry Potter",
                author: "J.K Rowling",
                rating: 4.3,
                popularity: 69,
                pages: 100,
                year: '2006-04-01',
                publisher: "Wrtnilg"
            },
            {
                id: 3,
                title: "Harry Potter",
                author: "J.K Rowling",
                rating: 4.3,
                popularity: 69,
                pages: 100,
                year: '2006-04-01',
                publisher: "Wrtnilg"
            },
            {
                id: 4,
                title: "Harry Potter",
                author: "J.K Rowling",
                rating: 4.3,
                popularity: 69,
                pages: 100,
                year: '2006-04-01',
                publisher: "Wrtnilg"
            }
        ]
     }

    render() { 
        const {books} = this.props;
        return ( 
            
            <section className="pt-5 d-flex flex-wrap justify-content-center">
                {books.map((item, key) => {
                    return(
                        
                        <Book key={key} book={item}/>
                   
                    )
                })}
            </section>
         );
    }
}
 
export default BookList;