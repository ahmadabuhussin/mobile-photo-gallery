import React from 'react'
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ImagesBrowserHeader from './ImagesBrowserHeader'
import Icon from 'react-native-vector-icons/Ionicons'
import { saveFavorite } from './ImagesBrowserActions'

const styles = StyleSheet.create({
  favorite: {
    paddingTop: 30,
    alignSelf: 'center'
  },
  image: {
    width: 415,
    height: 415
  }
})

const ImageDisplay = props => (
  <View>
    <ImagesBrowserHeader />
    <Image style={styles.image} source={{ uri: props.image.largeImageURL }} />
    {!props.favorites.some(item => {
      return item.id === props.image.id
    }) && (
      <TouchableOpacity
        style={styles.favorite}
        onPress={() => props.dispatch(saveFavorite(props.image))}
      >
        <Icon name="md-heart" size={100} color="#2040C0" />
      </TouchableOpacity>
    )}
  </View>
)

ImageDisplay.propTypes = {
  image: PropTypes.object,
  favorites: PropTypes.array,
  dispatch: PropTypes.func
}

const mapStateToProps = state => ({
  image: state.imagesbrowser.image,
  favorites: state.imagesbrowser.favorites
})

export default connect(mapStateToProps)(ImageDisplay)
