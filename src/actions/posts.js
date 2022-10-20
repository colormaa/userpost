import * as types from './types';
import axios from 'axios';
import { setUser } from './users';

export const getPosts =(userId)=>dispatch=>{
        
        dispatch(setUser(userId));
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(res=>{
            console.log("userId res ", res.data)
            dispatch({
                type: types.SET_POSTS,
                payload: res.data
            });
        })
        .catch(err=>{
            dispatch({
                type: types.SET_POSTS,
                payload: []
            });
        })
}

export const setPosts=(posts)=>dispatch=>{
    dispatch({
        type: types.SET_POSTS, 
        payload: posts
    });
}

