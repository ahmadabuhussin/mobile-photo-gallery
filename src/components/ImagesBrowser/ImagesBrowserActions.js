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

export const fetchImagesBegin = () => ({
  type: FETCH_IMAGES_BEGIN
})

export const fetchImagesSuccess = images => ({
  type: FETCH_IMAGES_SUCCESS,
  data: images
})

export const toggleGridView = boolean => ({
  type: TOGGLE_GRID_VIEW,
  data: boolean
})

export const toggleImageDisplay = (boolean, image) => ({
  type: TOGGLE_IMAGE_DISPLAY,
  data: image,
  display: boolean
})

export const toggleFavorite = () => ({
  type: TOGGLE_FAVORITE
})

export const saveFavorite = image => ({
  type: SAVE_FAVORITE,
  data: image
})

export const storeFavorites = item => ({
  type: STORE_FAVORITES,
  data: item
})

export function loadFavorites() {
  return dispatch => {
    AsyncStorage.getAllKeys().then(keys => {
      return AsyncStorage.multiGet(keys).then(result => {
        result.map(req => dispatch(storeFavorites(JSON.parse(req[1]))))
      })
    })
  }
}

export function fetchImages(search) {
  return dispatch => {
    dispatch(fetchImagesBegin())
    const searchQuery = search ? search.split(' ').join('+') : ''
    return fetch(`https://pixabay.com/api/?key=12311668-fb8d061530b0a8b8e96ac0d02&q=${searchQuery}`)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchImagesSuccess(json.hits))
        return json.hits
      })
  }
}
