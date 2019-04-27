import React from 'react'
import { StyleSheet, FlatList, Image, View, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleImageDisplay } from './ImagesBrowserActions'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  image: {
    margin: 15,
    width: 70,
    height: 70
  },
  text: {
    paddingTop: 20,
    paddingBottom: 10,
    fontSize: 16,
    fontWeight: 'bold'
  }
})

const ImagesBrowserList = props => (
  <FlatList
    numColumns={1}
    data={props.images}
    keyExtractor={image => image.id.toString()}
    renderItem={image => (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => props.dispatch(toggleImageDisplay(true, image.item))}>
          <Image style={styles.image} source={{ uri: image.item.previewURL }} />
        </TouchableOpacity>
        <View>
          <Text style={styles.text}>{image.item.tags}</Text>
          <View style={styles.container}>
            <Text> Views: {image.item.views} </Text>
            <Text> Likes: {image.item.likes} </Text>
          </View>
        </View>
      </View>
    )}
  />
)

ImagesBrowserList.propTypes = {
  images: PropTypes.array,
  dispatch: PropTypes.func
}

export default connect()(ImagesBrowserList)
