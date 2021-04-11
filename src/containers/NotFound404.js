import React from 'react'
import {Link} from 'react-router-dom';

function NotFound404() {
    return (
        <div className='title'>
          <h2>Not Found 404 Error</h2> 
          <Link to='/'><h3>Back To Home Page</h3></Link>
        </div>
    )
}

export default NotFound404
