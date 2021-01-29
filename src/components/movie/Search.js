import React, {useState } from 'react';
import {getmoviesBysearch} from '../../actions/movieAction'
import './Search.css';
import {connect} from 'react-redux' 
  const Search =({getmoviesBysearch})=>  {
         const [title,setTitle ] = useState('');
  const handlesubmit =(e)=>{
               e.preventDefault()
              // setTitle('');          
               getmoviesBysearch(title)
               setTitle('');
              }
  return(
     <div className="form">
       <form onSubmit={handlesubmit}>
       <div className="form-group">   
      <input type="text" className="form-control-lg size" name="search" value={title} onChange ={e=>setTitle(e.target.value)}  placeholder="Search your movie"/>
      </div>
      <input type="submit" className="form-control"  value='submit' />
     </form>
    </div>
   )
};
export default connect(null,{getmoviesBysearch})(Search)

