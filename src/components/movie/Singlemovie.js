import React, { Component, Fragment } from 'react';
import Spinner from '../layout/Spiner' 
import { Link } from 'react-router-dom';
class Singlemovie extends Component  {
  //  console.log(this.props)

  
render() {
     return(
         <Fragment>
             <Link to = '/' className="btn btn-primary btn-sm" >Back to Search </Link>     
             <div className='flex'>
               <div classNam='all-center'>
                  <img></img>
                  <h1></h1>
                  <p>Welcome movie api</p>
              </div>
              <div> 
              
          </div>   
          </div>
         </Fragment>)   
   }
}


export default Singlemovie;
