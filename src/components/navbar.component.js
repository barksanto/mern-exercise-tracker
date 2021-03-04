import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../styles/navbar.css"

export default class Navbar extends Component {

  render() {
    return (

      <nav className="navbar navbar-dark bg-secondary navbar-expand-lg">
        <img className="logo pr-2" src="https://www.flaticon.com/svg/vstatic/svg/1198/1198416.svg?token=exp=1614877609~hmac=5df255a2ad8b30e73d264c6510c307bb" />
        <Link to="/" className="navbar-brand">Excercise Tracker</Link>
        <div className="collapse navbar-collapse"> {/* missing 'collapse' */}
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Exercises</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Create Exercise Log</Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">Create User</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}