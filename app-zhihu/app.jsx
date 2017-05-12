import React, { Component } from 'react';
import styles from './css/main.styl';
import Header from './components/header';
import User from './components/user';

class App extends Component {
  render() {
    return (
        <div className={styles.content}>
                <Header />
                <User />
        </div>
    );
  }
}

export default App;