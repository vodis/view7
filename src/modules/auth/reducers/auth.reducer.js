 const initialState = {
     authReducer: 'authReducer'
 };

 export default function authReducer(state = initialState, action) {
     switch (action.type) {
         case 'LOGIN_SUCCESS':
            return {
                authReducer: Math.random().toFixed(1)
            };
         default: 
            return state;
     }
 }