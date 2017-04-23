import React, { Component } from 'react';
import styles from '../css/main.styl';

class User extends Component {
  render() {
    return (
    <div className={styles.user}>
      <div className={styles.tab}>
        <div className={styles.label}>
          <a className={styles.active}>注册</a>
          <a>登录</a>
          <span></span>
        </div>
      </div>
      <div className={styles.form}>
        <div className={styles.reg+' '+styles.active}>
          <input type="text" placeholder="姓名" />
          <input type="text" placeholder="手机号 （仅支持中国大陆）" />
          <input type="text" placeholder="密码（不少于6位）" />
        </div>
        <div className={styles.login}>
          <input type="text" placeholder="手机号或邮箱" />
          <input type="text" placeholder="密码" />
        </div>
      </div>
      <div className={styles.btn}>
        <button type="submit">注册知乎</button>
      </div>
    </div>
    );
  }
}

export default User;