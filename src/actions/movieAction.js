import{GET_MOVIES,GET_SINGLEMOVIE,SET_LOADING} from './types'
const axios = require('axios');
export const getmoviesBysearch = (s) => async dispatch=>{
    try {
           setLoading();
            const res =  await axios.get(`https://www.omdbapi.com/?apikey=95eba6bd&s=${s}`)
           dispatch({
             type: GET_MOVIES,
             payload: res.data.Search
           });
         } 
         catch (err) {
               console.log(err)
         }
       }

export const getmovieById = (id) => async dispatch=>{
     try {
            setLoading();
              const res =  await axios.get(`https://www.omdbapi.com/?apikey=95eba6bd&i=${id}`)
             dispatch({
               type: GET_SINGLEMOVIE,
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