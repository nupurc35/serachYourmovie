 import   React,{Fragment,useEffect } from 'react';
 import  {Link}         from 'react-router-dom';
 import  {connect}      from 'react-redux' 
 import  {getmovieById} from '../../actions/movieAction'
 import  {useParams}    from 'react-router-dom'
 import './Singlemovie.css';
 const  Singlemovie = ({getmovieById,singlemovie,Ratings})=>  {
  //  console.log(this.props)
  const { id } = useParams()
  useEffect(() => {
    // Update the document title using the browser API
      console.log(id); 
      getmovieById(id)
   },[id]);
return(   
          <Fragment>
             <Link to = '/' className="btn btn-primary btn-sm back" >Back to Search </Link>     
            <div className='flex'>
               <div classNam='all-center'>
                  <img src={singlemovie.Poster} className="singleposter"></img>
                  <h1>{singlemovie.Title}</h1>
                  <p>Director: {singlemovie.Director}</p>
                  <p>Actors:{singlemovie.Actors}</p>
                  <div className="rating-box"> 
                  {Ratings&& Ratings.map(rating=>{
                             return( 
                              <div className="rating">
                                <div className="source">
                                <p>{rating.Source}</p>
                                </div>
                                <div className="value">  
                                <p>{rating.Value}</p> 
                                </div> 
                              </div>
                              )
                            })}
                     </div>
                     </div>
             </div>
         </Fragment>
        )   
  }

   const mapStateToProps = (state) =>({
    singlemovie:state.movie.singlemovie,
    Ratings:state.movie.singlemovie.Ratings
  })
 export default connect(mapStateToProps,{getmovieById})(Singlemovie)
