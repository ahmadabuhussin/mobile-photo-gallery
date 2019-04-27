import { combineReducers } from 'redux'
import imagesbrowserReducer from './components/ImagesBrowser/imagesbrowserReducer'

export default combineReducers({
  imagesbrowser: imagesbrowserReducer
})
