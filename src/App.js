import './App.css';
import React, { Component } from 'react'
import {Route, Switch, HashRouter as Router} from 'react-router-dom';
import TopBar from './components/topBar';
import SideBar from './components/sidebar/sideBar';
import BookList from './components/main/bookList';
import Details from './components/details/details';
import Permission from './components/details/permission';


 

export class App extends Component  {
  state = {
    book: []
  }


  componentDidMount(){
    this.fetchProducts();

  }

  fetchProducts = () =>{
    fetch('api/library/books/10/10')
    .then(res => res.json())
    .then(book => {
      this.setState({book})
    });
  }

  sortBooksByName = () =>{
    var sorted = this.state.book.sort((a, b) => a.title.localeCompare(b.title));
    this.setState({books: sorted})
  }

  sortBooksByRating = () =>{
    var sorted = this.state.book.sort((a, b) => b.rating > a.rating ? 1 : -1);
    this.setState({books: sorted})
  }

  sortBooksByDate = () =>{
    var sorted = this.state.book.sort((a, b) => b.year.localeCompare(a.year));
    this.setState({books: sorted})
  }

  getTopBooks = () =>{
    fetch('api/library/books/popular/10')
    .then(res => res.json())
    .then(book => {
      this.setState({book})
    });
  }

  dicoverBooks = () => {
    fetch('api/library/books/discover')
    .then(res => res.json())
    .then(book => {
      this.setState({book})
    });
  }

  render() {  
    return (
    <Router>
      <div className="grid-container">
        <div className="nav-bar-grid"> <TopBar /></div>
        <div className="side-bar-grid">
          <SideBar 
            nameSort={this.sortBooksByName}
            ratingSort={this.sortBooksByRating}
            dateSort={this.sortBooksByDate}
            topBooks={this.getTopBooks}
            discover={this.dicoverBooks}/>
        </div> 
        <div className="main-grid">
            <Switch>
              <Route path='/' exact render={() => <BookList books={this.state.book} /> } /> 
              <Route path={'/book/:id'}  render={() => <Details books={this.state.book} /> } />
              <Route path={'/alert'}  render={() => <Permission/> } />
            </Switch>
        </div>
        <div className="footer-grid"></div>
      </div>
   </Router>
  );
}
}

export default App;
