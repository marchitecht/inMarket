import axios from "axios";
const backUrl = 'http://localhost:5000'

const initialState = {
    categories: [],
    currentCategory: {},
    subcategories: [],
    currentSubcategory: {},
    products: []
  };
  const productsReducer = function (state = initialState, action) {
    switch (action.type) {
      case "GET_CATEGORIES": 
        return {...state, categories: action.payload}
        case "GET_CATEGORY": 
        return {...state, subcategories: [...action.payload.subcategories], currentCategory: {...action.payload.currentCategory}}
      default:
        return state;
    }
  };
  export const getCategories =  () => async (dispatch) => {
      try {
        const categories = await axios.get(`${backUrl}/`)
        dispatch({type: 'GET_CATEGORIES', payload: categories.data})
      } catch (error) {
        console.log(error.response?.data?.message)
      }
    }
    export const getCategory =  (categoryName) => async (dispatch) => {
      try {
        const category = await axios.get(`${backUrl}/categories/${categoryName}`)
        dispatch({type: 'GET_CATEGORY', payload: category.data})
      } catch (error) {
        console.log(error.response?.data?.message)
      }
    }
    // export const getProducts =  (subCategoryId) => async (dispatch) => {
    //   try {
    //     const category = await axios.get(`${backUrl}/categories/${categoryId}`)
    //     dispatch({type: 'GET_CATEGORY', payload: category.data})
    //   } catch (error) {
    //     console.log(error.response?.data?.message)
    //   }
    // }
    

  
  export default productsReducer;