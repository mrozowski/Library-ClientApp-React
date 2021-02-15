import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './bookStyle.css';

class Book extends Component {
    state = {  }
    render() { 
        const {id, title, authors, rating } = this.props.book; 
        return (
            <div className="book shadow mx-3 mb-3 bg-white d-flex">
                <div className="list-item-content flex-grow-1">    
                    <h3 className="truncate-overflow">{title}</h3>
                    <h5 className="fw-light authors">{authors}</h5>
                    <h6 className="fw-light ">Rating: {rating}</h6>
                </div>

                <div className="ps-auto d-flex">
                    <Link to={{pathname: `/book/${id}`, query: {id: id}}}>
                        <button className="book-button btn-details">
                            Details
                        </button>
                    </Link>
                    <Link to={{pathname: "/alert"}}>
                        <button className="book-button btn-green ">
                            Borrow
                        </button>
                    </Link>
                </div>
            </div>
         );
    }
}
 
export default Book;