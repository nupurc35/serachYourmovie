import React, { Component, Fragment } from 'react';
import Loader from './loader.gif'
const Spinner = () =>  {
  //  console.log(this.props)
  
  return (
        <Fragment>
            <img src={Loader} style={{width:'200px',margin:'auto', display:'block'}}></img>
        </Fragment>
      )
  }

export default Spinner;
