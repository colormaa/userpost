import * as types from '../actions/types';
const initialState = {
   posts:[],
   loading: false,  
}
export default function (state = initialState, action){
    switch(action.type){
        case types.SET_POSTS: 
            return{
                ...state,
                posts:action.payload, 
                loading: false
            }
        default: 
            return state;
    }
}
