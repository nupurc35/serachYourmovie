import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import Useritem from './Movieitem'
import Spinner from '../layout/Spiner'
import {connect} from 'react-redux' 
import {getusers} from '../../actions/userAction'

const  Movies  = ()=>  {
    return( 
         <div >
            <p>This is useritem</p> 
         </div>   
          )
   }
const mapStateToProps = (state) =>({
    user:state.user,
})

const usestyle = {
  display:'grid',
  gridTemplateColumns:'repeat(4,1fr)'

};
export default Movies;
