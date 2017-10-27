import React, { Component } from 'react';
import styles from './css/main.styl';
import User from './components/user';

class App extends Component {
  render() {
    return (
        <div className={styles.content}>
                <User />
        </div>
    );
  }
}


export default App;