
   
import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/viewposts">View Posts</Link>
                <Link className="nav-link" to="/signin">Sign In </Link>
                <Link className="nav-link" to="/signup">Sign Up</Link>
                <Link className="nav-link" to="/createpost">Create a Post</Link>
                <Link className="nav-link" to="/logout">Logout</Link>
            </div>
            </div>
        </div>
    </nav>
  )
}