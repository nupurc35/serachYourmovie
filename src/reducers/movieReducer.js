import{GET_MOVIES,SET_LOADING,GET_SINGLEMOVIE} from '../actions/types'
const initialState = {
movies:[],
singlemovie:{},
loading:false
}

export default function  (state = initialState , action ){
    switch(action.type){
    case GET_MOVIES:
    return {
   ...state ,
   loading:false,
   movies:action.payload

  };

  case GET_SINGLEMOVIE:
   return {
  ...state ,
  loading:false,
  singlemovie:action.payload

 };
case SET_LOADING:
     return {
        ...state,
        loading: true
     };          

default:
return state      
} 

}