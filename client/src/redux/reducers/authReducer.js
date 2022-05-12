import axios from "axios";
import AuthService from "../../services/authService";

const initialState = {
    user: null,
    auth: false
  };
  const authReducer = function (state = initialState, action) {
    switch (action.type) {
      case "REFRESH": 
        return {...state, user: action.payload.user, auth: true }
      case "LOGIN_USER": 
        return {...state, user: action.payload.user, auth: true }
      case "REGISTER USER":
       return {...state, user: action.payload.user, auth: true}
       case 'LOGOUT': 
       return {...state, user: {}, auth: false}
      default:
        return state;
    }
  };
  export const login =  (email, password) => async (dispatch) => {
      try {
        const response = await AuthService.login(email, password)
        localStorage.setItem('token', response.data.accessToken)
        dispatch({type: 'LOGIN_USER', payload: response.data})
      } catch (error) {
        console.log(error.response?.data?.message)
      }
    }
    export const registration =  ({email, password, firstName, lastName, dob, gender, role, avatar}) => async (dispatch) => {
      try {
        const response = await AuthService.registration({email, password, firstName, lastName, dob, gender, role, avatar})
        console.log(response);
        localStorage.setItem('token', response.data.accessToken)
        dispatch({type: 'REGISTER_USER', payload: response.data})
      } catch (error) {
        console.log(error.response?.data?.message)
      }
    }

    export const logout =  () => async (dispatch) => {
      try {
        const response = await AuthService.logout()
        localStorage.removeItem('token')
        dispatch({type: 'LOGOUT'})
      } catch (error) {
        console.log(error.response?.data?.message)
      }
    }
    export const checkAuth =  () => async (dispatch) => {
     try {
       const response = await axios(`http://localhost:5000/auth/refresh`, {withCredentials: true})
       console.log('----> responce', response);
       localStorage.setItem('token', response.data.accessToken)
       dispatch({type: 'REFRESH', payload: response.data})
      } catch (error) {
       console.log(error);
     }
    }

  
  export default authReducer;
