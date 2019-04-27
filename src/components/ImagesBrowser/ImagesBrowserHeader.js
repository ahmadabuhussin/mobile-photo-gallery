import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { toggleImageDisplay, toggleFavorite } from './ImagesBrowserActions'
import Icon from 'react-native-vector-icons/Ionicons'

const styles = StyleSheet.create({
  container: {
    paddingLeft: 1,
    paddingRight: 1,
    backgroundColor: '#505050',
    borderWidth: 3,
    borderColor: '#202020',
    flexDirection: 'row',
    color: '#FFFFFF'
  },
  headerText: {
    color: '#FFFFFF',
    padding: 10,
    paddingBottom: 10,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textContainer: {
    flex: 0.9
  }
})

class ImagesBrowserHeader extends Component {
  render() {
    const { displayImage, displayFavorite, dispatch } = this.props
    return (
      <View style={styles.container}>
        {displayImage && (
          <TouchableOpacity onPress={() => dispatch(toggleImageDisplay(false))}>
            <Icon name="md-arrow-back" size={50} color="#FFFFFF" />
          </TouchableOpacity>
        )}
        <View style={styles.textContainer}>
          <Text style={styles.headerText}>Images Browser</Text>
        </View>
        {!displayImage && (
          <TouchableOpacity onPress={() => dispatch(toggleFavorite())}>
            <Icon
              name={displayFavorite && !displayImage ? 'md-arrow-back' : 'md-heart'}
              size={50}
              color="#FFFFFF"
            />
          </TouchableOpacity>
        )}
      </View>
    )
  }
}

ImagesBrowserHeader.propTypes = {
  displayImage: PropTypes.bool,
  displayFavorite: PropTypes.bool,
  dispatch: PropTypes.func
}

const mapStateToProps = state => ({
  displayImage: state.imagesbrowser.displayImage,
  displayFavorite: state.imagesbrowser.displayFavorites
})

export default connect(mapStateToProps)(ImagesBrowserHeader)
