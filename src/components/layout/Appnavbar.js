import React ,{Component, Fragment} from 'react';
import { Link } from 'react-router-dom'

const Navbarapp = ()=>{
 return(
    <nav className="navbar bg-dark">
    <h1>
      <a href="index.html"><i className="fas fa-code"></i>GithubFinder</a>
    </h1>
    <ul>
      <li> <Link to ='/'>Home</Link></li>
      <li> <Link to ='/about'>About</Link></li>
    </ul>
  </nav>
 )
}

export default Navbarapp;
