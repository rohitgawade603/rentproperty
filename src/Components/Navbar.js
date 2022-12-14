import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
        <a className="navbar-brand" href="/">Rent a Property</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Rent</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Buy</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Sell</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Manage Property
                </a>
                <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
            </li>
            
            </ul>
            <div className="buttons">
                <button type="button" className="btn btn-primary login" >Login</button>
                <button type="button" className="btn btn-primary signup">Sign Up</button>
            </div>
            
        </div>
        </div>
  </nav>
  )
}
