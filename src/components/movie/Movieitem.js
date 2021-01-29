import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const Movieitem = ( )=>  {
  //  console.log(this.props)
  
  return (
        <div className="card text-center">
          <img src ="#" alt=""  className="round-img"  style={{width:'60px'}}></img>         
          <div>
         
           <Link to='/' className="btn btn-primary btn-sm">Click Me</Link>
         
        </div>
       </div>      
      )
  }

export default Movieitem;
