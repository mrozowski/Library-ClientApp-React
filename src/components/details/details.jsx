import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { NavLink} from 'react-router-dom';



var url = "https://java-library-api.herokuapp.com/";
export class Details extends Component {
    state = {
        bookId: 0,
        isFetching: true,
        bookDetails: null 
    }

    componentDidMount(){        
        var id = this.props.location.pathname;
        id = id.substr(6, id.length-1);

        if(this.props.books != null && id != null){
            const element = this.props.books.find(book => book.id === id)
            if(element != null){
                console.log(element);
                this.setState({bookDetails: element, bookId: id, isFetching: false})
                return;
            }            
        }

        this.setState({bookId: id});
        this.fetchOpinion(id);   
    }

    fetchOpinion = id =>{
        fetch(url + `api/library/books/id/${id}`)
        .then(res => res.json())
        .then(details => {
          this.setState({bookDetails: details, bookId: id, isFetching: false})
        });
      }

      getPopularity = () => {
            var p = this.state.bookDetails.popularity;
            if(p > 90) return "Very popular";
            else if(p > 50) return "Popular";
            else if(p > 10) return "Less popular";
            else return "Not many people read this book";
      }



      render(){
        if(this.state.isFetching){
            return (<div>Loading...</div>);
        }
        else{
            return(
                  <div>
                      <div className="card mx-5 mt-5 shadow">
                        <div className="card-body">
                            <h5 className="card-title">{this.state.bookDetails.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{this.state.bookDetails.authors}</h6>
                            <h6 className="card-subtitle mb-2 mt-3">Raiting: <span className="fw-normal mx-1"> {this.state.bookDetails.rating} </span></h6>
                            <h6 className="card-subtitle mb-2">Pages: <span className="fw-normal mx-1"> {this.state.bookDetails.pages}</span></h6>
                            <h6 className="card-subtitle mb-2">Year: <span className="fw-normal mx-1"> {this.state.bookDetails.year}</span></h6>
                            <h6 className="card-subtitle mb-2">Publisher: <span className="fw-normal mx-1"> {this.state.bookDetails.publisher}</span></h6>
                            <h6 className="mb-2"> {this.getPopularity()}</h6>
                            <NavLink to='/' >
                                <button type="button"className="btn btn-outline-secondary my-2 "> Back </button>
                            </NavLink>
                            <NavLink to='/alert' >
                                <button type="button" className="btn btn-outline-success mx-3">Borrow</button>
                            </NavLink>
                        </div>
                      </div>
                  </div>
            );
        }
          
      }

}

export default withRouter(Details)