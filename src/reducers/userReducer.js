import{GET_USERS ,GET_USERBYNAME,SET_LOADING} from '../actions/types'
const initialState = {
users:[],
user:{},
loading:false
}

export default function  (state = initialState , action ){
    switch(action.type){
    case GET_USERS:
    return {
   ...state ,
   loading:false,
   users:action.payload

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