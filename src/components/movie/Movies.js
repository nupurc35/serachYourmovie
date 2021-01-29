import React,{useEffect, useState,Fragment} from 'react';
import {connect} from 'react-redux' 
import './Movies.css';
import {Link} from 'react-router-dom';
import Pagination from '../pagination/Pagination'
const  Movies  = ({movies,loading})=>  { 
  

  const  [currentpage,setCurrentpage]     = useState(1);
  const  [moviesperpage,setmoviesperpage] = useState(4);
  const  indexOflastmovie                 = currentpage*moviesperpage;
  const  indexOffirstmovie                =  indexOflastmovie -moviesperpage 
  const  currentmovies                    = movies.slice(  indexOffirstmovie , indexOflastmovie)
  const  totalmovies                      = movies.length;  
  
  const paginate = (number)=>{
           setCurrentpage(number)
           console.log(currentpage);
           console.log(indexOffirstmovie);
    }
     

   return( 
          <Fragment>
         <div style={usestyle}>
           {currentmovies&&!loading && movies.length!==0 && currentmovies.map(movie=>{
                    return ( <div className="item item-1"><Link to = {`/singlemovie/${movie.imdbID}`}><img src= {movie.Poster}/></Link></div>)
          })}      
         </div>
          {movies.length!==0?(<Pagination moviesperpage  = {moviesperpage} 
                                          totalmovies    = {totalmovies}
                                          paginate       = {paginate}
                                          currentpage    = {currentpage}
                               ></Pagination>):''}   
         </Fragment> 
          )
   }
const mapStateToProps = (state) =>({
    movies:state.movie.movies,
    loading:state.movie.loading
})
const usestyle = {
  display:'grid',
  gridTemplateColumns:'repeat(4,1fr)'

};
export default connect(mapStateToProps,null)(Movies)
