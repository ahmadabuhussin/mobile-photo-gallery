import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleGridView } from './ImagesBrowserActions'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  },
  button: {
    alignSelf: 'stretch',
    backgroundColor: '#2060C0'
  },
  buttonSelect: {
    alignSelf: 'stretch',
    backgroundColor: '#909090'
  },
  buttonText: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
})

class ImagesBrowserNav extends Component {
  render() {
    const { gridView, dispatch } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={gridView ? styles.buttonSelect : styles.button}
            onPress={() => {
              dispatch(toggleGridView(true))
            }}
          >
            <Text style={styles.buttonText}>Grid View</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={gridView ? styles.button : styles.buttonSelect}
            onPress={() => {
              dispatch(toggleGridView(false))
            }}
          >
            <Text style={styles.buttonText}>List View</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

ImagesBrowserNav.propTypes = {
  gridView: PropTypes.bool,
  dispatch: PropTypes.func
}

const mapStateToProps = state => ({
  gridView: state.imagesbrowser.gridView
})

export default connect(mapStateToProps)(ImagesBrowserNav)
