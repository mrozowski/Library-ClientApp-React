import React from 'react';

function TopBar() {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white">
         <div className="container-fluid ">
            <a className="navbar-brand flex-grow-1">Library</a>  
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
            </button>
            <div>
                <div className="collapse navbar-collapse wrapper" id="navbarSupportedContent"> 
                    <form >
                        <div className="input-group" >        
                            <input type="text" class="form-control" placeholder="search" aria-label="search" aria-describedby="button-addon2"/>
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>              
                        </div>
                    </form>

                    <ul className="navbar-nav me-auto mb-2 mb-md-0 nav-bar-login">
                        <li className="nav-item d-flex justify-content-end">
                            <a className="nav-link active" aria-current="page" href="#">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
            
            
        </div>
        </nav>
    );
  }
  
  export default TopBar;