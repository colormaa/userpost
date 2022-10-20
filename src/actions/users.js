import * as types from './types';
import axios from 'axios';

export const getUsers =()=>dispatch=>{

    console.log("users ")
        dispatch(setUser(''));
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res=>{
            dispatch({
                type: types.SET_USERS,
                payload: res.data
            });
        })
        .catch(err=>{
            dispatch({
                type: types.SET_USERS,
                payload: []
            });
        })
}

export const setUsers=(users)=>dispatch=>{
    dispatch({
        type: types.SET_USERS, 
        payload: users
    });
}
export const setUser=(userId)=>dispatch=>{
    dispatch({
        type: types.SET_USER, 
        payload: userId
    });
}
