import{GET_USERS ,GET_USERBYNAME,SET_LOADING} from './types'
const axios = require('axios');
export const getusers = () => async dispatch=>{
    try {
           setLoading();
            const res =  await axios.get(`https://api.github.com/users`)
           dispatch({
             type: GET_USERS,
             payload: res.data
           });
         } 
         catch (err) {
               console.log(err)
         }
       }













export const setLoading = ()=>{
    return{
         type:SET_LOADING 
      }
} 