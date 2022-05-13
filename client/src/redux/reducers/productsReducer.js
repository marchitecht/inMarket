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
      return {
        ...state, categories: action.payload
      }
      case "GET_CATEGORY":
        return {
          ...state, subcategories: [...action.payload.subcategories], currentCategory: {
            ...action.payload.currentCategory
          }
        }
        default:
          return state;
  }
};
export const getCategories = () => async (dispatch) => {
  try {
    const categories = await axios.get(`${backUrl}/`)
    dispatch({
      type: 'GET_CATEGORIES',
      payload: categories.data
    })
  } catch (error) {
    console.log(error.response?.data?.message)
  }
}
export const getCategory = (categoryName) => async (dispatch) => {
  try {
    const category = await axios.get(`${backUrl}/categories/${categoryName}`)
    dispatch({
      type: 'GET_CATEGORY',
      payload: category.data
    })
  } catch (error) {
    console.log(error.response?.data?.message)
  }
}
export const getProducts = (subCategoryId) => async (dispatch) => {
  try {
    const category = await axios.get(`${backUrl}/categories/fsdfksjdfj/subcategories/${subCategoryId}}`)
    dispatch({
      type: 'GET_CATEGORY',
      payload: category.data
    })
  } catch (error) {
    console.log(error.response?.data?.message)
  }
}

export const addProduct = ({
  subCategoryId,
  userId,
  image
}) => async (dispatch) => {
  try {
    console.log("QQQQQQQQQQQQQQQQQQQQQQQQQQQQ");
    // const data = new FormData({
    //   subCategoryId,
    //   userId,
    //   image
    // })
    const data = new FormData();
    data.append('subCategoryId', subCategoryId);
    data.append('userId', userId);
    data.append('image', image);
    console.log(Object.fromEntries(data), '<<<<<<<<<<<<<<');
    const newProduct = await axios.post('http://localhost:5000/vendor/menu/new', Object.fromEntries(data), {
      header: {
        "Content-Type": "multipart/form-data"
      }
    })
    console.log(newProduct);
    // dispatch({
    //   type: 'GET_CATEGORY',
    //   payload: newProduct.data
    // })
  } catch (error) {
    console.log(error.response?.data?.message)
  }
}


export default productsReducer;