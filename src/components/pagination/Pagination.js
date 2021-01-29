import React from 'react';
import './Pagination.css'
const Pagination = ({totalmovies,moviesperpage,paginate,currentpage}) => {
let totalpage = Math.ceil(totalmovies/moviesperpage)
const pagenumbers = [] 
   
  for(let i=1 ; i<=totalpage;i++ ){
    pagenumbers.push(i);       
  }
 
return (
   <div class="pagination">
     <ul className="pagination">
      {pagenumbers && pagenumbers.map(number=>{
                  return  (<li key={number}><a className={currentpage===number?'active':''} href="#" onClick={()=>paginate(number)}>{number}</a></li>)
    })}     
    </ul>
   </div>
  );
};

export default Pagination;



