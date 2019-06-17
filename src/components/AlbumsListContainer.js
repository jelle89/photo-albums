import * as React from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux'
import { addAlbum } from '../actions/test'

const sleep = time => new Promise(
  resolve => setTimeout(() => resolve(`I waited for ${time} ms`), time)
)

class AlbumsListContainer extends React.Component {
  state = {}

  componentDidMount() {
    request('https://jsonplaceholder.typicode.com/albums')
      .then(response => this.setState({ albums: response.body }))
      sleep(2000)
        .then(message => this.props.addAlbum(5, 'Enjoying Sunshine'))
      sleep(3000)
        .then(message => this.props.addAlbum(10, 'Having fun in the US'))
      
  }

  addAlbum = (id, title) => {
    this.props.dispatch({
      type: 'ADD_ALBUM',
      payload: {
        id: id,
        title: title
      }
    })
    return addAlbum
  }
  
  

  render() {
    
    if (!this.state.albums) return 'Loading...'
    return <AlbumsList albums={this.props.albums}  /> 
    
  }
}

const mapStateToProps = (state) => {
  return {
    albums: state.albums
  }
}

export default connect(mapStateToProps, { addAlbum: addAlbum })(AlbumsListContainer)