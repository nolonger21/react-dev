import React, { Component } from 'react';
import styles from '../css/main.styl';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'


class Tab extends Component{
  constructor(props){
    super(props);
    this.state = {
      activeIndex : 0
    }
  }
  handleClick0(){
    this.setState({activeIndex:0})
  }
  handleClick1(){
    this.setState({activeIndex:1})
  }
  render(){
    return (
    <div className={styles.tab}>
      <div className={styles.label} data-active-index={this.state.activeIndex}>
        <NavLink to="/reg" activeClassName={styles.active}onClick={this.handleClick0.bind(this)}>注册</NavLink>
        <NavLink to="/login" activeClassName={styles.active} onClick={this.handleClick1.bind(this)}>登录</NavLink>
        <span></span>
      </div>
    </div>  
    )
  }
}

const Reg = () => (
  <Route path="/reg" render={()=>(
    <div className={styles.form}>
      <div className={styles.reg}>
        <input type="text" placeholder="姓名" />
        <input type="text" placeholder="手机号 （仅支持中国大陆）" />
        <input type="text" placeholder="密码（不少于6位）" />
      </div>
      <div className={styles.btn}>
        <button type="submit">注册知乎</button>
      </div>
    </div>
  )}/>
)

const Login = () => (
  <Route path="/login" render={()=>(
    <div className={styles.form}>
    <div className={styles.login}>
        <input type="text" placeholder="手机号或邮箱" />
        <input type="text" placeholder="密码" />
    </div>
    <div className={styles.btn}>
      <button type="submit">登录</button>
    </div>
    </div>
  )}/>
)

const User = () => (
<Router>
  <div className={styles.user}>
    <Tab />
    <Reg />
    <Login />
  </div>
</Router>
)


export default User;