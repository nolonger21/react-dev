import React, { Component } from 'react';
import { render } from 'react-dom';
import styles from './css/main.styl';
import Header from './components/header';

class App extends Component {
  render() {
    return (
        <div className={styles.content}>
                <Header />
        </div>
    );
  }
}

export default App;