import * as types from '../actions/types';
const initialState = {
   users:[],
   user:'',
   loading: false,  
}
export default function (state = initialState, action){
    switch(action.type){
        case types.SET_USERS: 
            return{
                ...state,
                users:action.payload, 
                loading: true
            }
            case types.SET_USER: 
            return{
                ...state,
                user:action.payload, 
                loading: true
            }
        default: 
            return state;
    }
}
