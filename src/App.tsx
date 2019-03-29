import React from 'react';
import './App.css';
import Counter from './components/counter/counter.component';
import { Provider } from 'react-redux';
import { store } from './Store'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}

export default App;
