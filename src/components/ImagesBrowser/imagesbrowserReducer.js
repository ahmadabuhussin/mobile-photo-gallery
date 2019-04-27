import AsyncStorage from '@react-native-community/async-storage'
import {
  FETCH_IMAGES_BEGIN,
  FETCH_IMAGES_SUCCESS,
  TOGGLE_GRID_VIEW,
  TOGGLE_IMAGE_DISPLAY,
  SAVE_FAVORITE,
  TOGGLE_FAVORITE,
  STORE_FAVORITES
} from './ImagesBrowserActionTypes'

const initialState = {
  images: [],
  favorites: [],
  loading: true,
  gridView: true,
  displayImage: false,
  displayFavorites: false,
  image: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES_BEGIN:
      return {
        ...state,
        loading: true
      }
    case FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        images: action.data,
        loading: false
      }
    case TOGGLE_GRID_VIEW:
      return {
        ...state,
        gridView: action.data
      }
    case TOGGLE_IMAGE_DISPLAY:
      return {
        ...state,
        displayImage: action.display,
        image: action.data
      }
    case SAVE_FAVORITE:
      AsyncStorage.setItem(action.data.id.toString(), JSON.stringify(action.data))
      return {
        ...state,
        favorites: [...state.favorites, action.data]
      }
    case TOGGLE_FAVORITE:
      return {
        ...state,
        displayFavorites: !state.displayFavorites
      }
    case STORE_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.data]
      }
    default:
      return state
  }
}
