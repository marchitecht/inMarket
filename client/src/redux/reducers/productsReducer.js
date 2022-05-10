import axios from "axios";
const backUrl = 'http://localhost:5000/'

const initialState = {
    categories: []
  };
  const productsReducer = function (state = initialState, action) {
    switch (action.type) {
      case "GET_CATEGORIES": 
        return {...state, categories: action.payload}
      default:
        return state;
    }
  };
  export const getCategories =  () => async (dispatch) => {
      try {
        const categories = await axios.get(`${backUrl}`)
        dispatch({type: 'GET_CATEGORIES', payload: categories.data})
      } catch (error) {
        console.log(error.response?.data?.message)
      }
    }
    

  
  export default productsReducer;