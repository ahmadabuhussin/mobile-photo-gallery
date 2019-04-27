import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchImages } from './ImagesBrowserActions'
import { SearchBar } from 'react-native-elements'
import { View } from 'react-native'

class ImagesBrowserSearch extends Component {
  state = {
    search: ''
  }

  updateSearch = search => {
    this.setState({ search })
  }

  render() {
    const { dispatch } = this.props

    return (
      <View>
        <SearchBar
          placeholder="Search"
          onChangeText={this.updateSearch}
          onEndEditing={() => dispatch(fetchImages(this.state.search))}
          value={this.state.search}
        />
      </View>
    )
  }
}

ImagesBrowserSearch.propTypes = {
  dispatch: PropTypes.func
}

export default connect(null)(ImagesBrowserSearch)
