import React, { Component } from 'react';
import './sidebarStyle.css';
class sideBar extends Component {
    state = {  }


    render() { 
        const {nameSort, ratingSort, dateSort, topBooks, discover} = this.props;
        return ( 
            <nav className="left-bar px-3 pt-5">
                <h3 className="side-bar-h3 fw-normal">Sort</h3>
                <ul className="list-unstyled ms-4 fw-light fs-5">
                    <li onClick={nameSort}>Name</li>
                    <li onClick={ratingSort}>Rating</li>
                    <li onClick={dateSort}>Date</li>
                </ul>
                <hr/>
                <h3 className="side-bar-h3">Browse</h3>
                <ul className="list-unstyled ms-4 fw-light fs-5">
                    <li onClick={topBooks}>Top books</li>
                    <li onClick={discover}>Discover</li>
                </ul>
                <hr/>
                <h3 className="side-bar-h3">Your books</h3>
                <ul className="list-unstyled ms-4 fw-light fs-5">
                    <li>Reading</li>
                    <li>History</li>
                </ul>
            </nav>
         );
    }
}
 
export default sideBar;