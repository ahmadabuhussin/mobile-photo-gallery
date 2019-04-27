import React from 'react'
import { StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleImageDisplay } from './ImagesBrowserActions'

const styles = StyleSheet.create({
  image: {
    flex: 1,
    margin: 5,
    width: 125,
    height: 125
  }
})

const ImagesBrowserGrid = props => (
  <FlatList
    numColumns={3}
    data={props.images}
    keyExtractor={image => image.id.toString()}
    renderItem={image => (
      <TouchableOpacity onPress={() => props.dispatch(toggleImageDisplay(true, image.item))}>
        <Image style={styles.image} source={{ uri: image.item.previewURL }} />
      </TouchableOpacity>
    )}
  />
)

ImagesBrowserGrid.propTypes = {
  images: PropTypes.array,
  dispatch: PropTypes.func
}

export default connect()(ImagesBrowserGrid)
