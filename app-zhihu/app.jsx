import React, { Component } from 'react';
import styles from './css/main.styl';
import Header from './components/header';
import User from './components/user';
import Other from './components/other';

class App extends Component {
  render() {
    return (
        <div className={styles.content}>
                <Header />
                <User />
                <Other />
        </div>
    );
  }
}

export default App;