import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchImages, loadFavorites } from './ImagesBrowserActions'
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native'
import ImagesBrowserHeader from './ImagesBrowserHeader'
import ImagesBrowserSearch from './ImagesBrowserSearch'
import ImagesBrowserNav from './ImagesBrowserNav'
import ImagesBrowserGrid from './ImagesBrowserGrid'
import ImagesBrowserList from './ImagesBrowserList'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  loading: {
    height: 300,
    justifyContent: 'center'
  },
  notFound: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center'
  },
  notFoundText: {
    fontSize: 30
  }
})

class ImagesBrowser extends Component {
  componentDidMount() {
    if (this.props.images.length < 1) this.props.dispatch(fetchImages())
    if (this.props.favorites.length < 1) this.props.dispatch(loadFavorites())
  }

  render() {
    const { images, favorites, loading, gridView, displayFavorites } = this.props

    return (
      <View styles={styles.container}>
        <ImagesBrowserHeader />
        {!displayFavorites && <ImagesBrowserSearch />}
        <ImagesBrowserNav />
        {loading ? (
          <View style={styles.loading}>
            <ActivityIndicator size={150} color="#2070D0" />
          </View>
        ) : (
          [
            gridView ? (
              <ImagesBrowserGrid key={'Grid'} images={displayFavorites ? favorites : images} />
            ) : (
              <ImagesBrowserList key={'List'} images={displayFavorites ? favorites : images} />
            )
          ]
        )}
        {images.length < 1 && !loading && (
          <View style={styles.notFound}>
            <Text style={styles.notFoundText}>No Results were Found</Text>
          </View>
        )}
      </View>
    )
  }
}

ImagesBrowser.propTypes = {
  images: PropTypes.array,
  favorites: PropTypes.array,
  loading: PropTypes.bool,
  gridView: PropTypes.bool,
  displayFavorites: PropTypes.bool,
  dispatch: PropTypes.func
}

const mapStateToProps = state => ({
  images: state.imagesbrowser.images,
  loading: state.imagesbrowser.loading,
  gridView: state.imagesbrowser.gridView,
  favorites: state.imagesbrowser.favorites,
  displayFavorites: state.imagesbrowser.displayFavorites
})

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({ fetchImages })
  return { ...actions, dispatch }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImagesBrowser)
