import React, { Component, Fragment } from 'react'
import { StyleSheet, SafeAreaView, View } from 'react-native'
import ImagesBrowser from './src/components/ImagesBrowser/ImagesBrowser'
import ImageDisplay from './src/components/ImagesBrowser/ImageDisplay'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white'
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})

class App extends Component {
  render() {
    const { displayImage } = this.props
    return (
      <Fragment>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            {displayImage ? <ImageDisplay /> : <ImagesBrowser />}
          </View>
        </SafeAreaView>
      </Fragment>
    )
  }
}

App.propTypes = {
  displayImage: PropTypes.bool
}

const mapStateToProps = state => ({
  displayImage: state.imagesbrowser.displayImage
})

export default connect(mapStateToProps)(App)
