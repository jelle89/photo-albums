import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store'
import {Provider} from 'react-redux'
import AlbumsListContainer from './components/AlbumsListContainer'

class App extends React.Component {
 
  render() {
    return (
      <div>
      <Provider store={store}>
      <AlbumsListContainer />
      </Provider>
      
      </div>
    );
  }
  }
  
  export default App;