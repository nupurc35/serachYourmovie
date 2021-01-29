import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './Search.css';
class Search extends Component  {
render() {
    return(
     <div className="form">
       <form>
       <div class="form-group">   
      <input type="text" className="form-control-lg size" placeholder="Input your text"/>
      </div>
      <input type="submit" className="form-control"  value='submit' />
     </form>
   </div>
   )
};
}




export default Search;
