 import { LOGIN_SUCCESS } from '../constants/auth.constants';

 const initialState = {
     authReducer: 'authReducer'
 };

 export default function authReducer(state = initialState, action) {
     switch (action.type) {
         case LOGIN_SUCCESS:
            console.log('LOGIN_SUCCESS', state);
            return {
                authReducer: Math.random().toFixed(1)
            };
         default: 
            return state;
     }
 }