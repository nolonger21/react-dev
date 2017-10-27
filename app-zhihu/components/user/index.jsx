import React, { Component } from 'react';
import styles from './css/main.styl'
import User_header from './User_header';
import User_main from './User_main';
import User_other from './User_other';


class User extends Component {
  render() {
    return (
        <div className={styles.user}>
                <User_header />
                <User_main />
                <User_other />
        </div>
    );
  }
}

export default User;