import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
class Permission extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="alert alert-warning mx-3 mt-3" role="alert">
                <h4 className="alert-heading">No permission</h4>
                <p>In order to do this action you have to be logged in. However, this website doesn't implement all API methods yet. Login is still not available.</p>
                <hr/>
                <p className="mb-0">Please go back to home page.</p>
                <NavLink to='/' >
                    <button type="button"className="btn btn-outline-secondary my-2 "> Back to home page</button>
                </NavLink>
            </div>
         );
    }
}
 
export default Permission;