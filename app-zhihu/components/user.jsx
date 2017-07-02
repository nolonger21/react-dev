import React, { Component } from 'react';
import styles from '../css/main.styl';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom'


class Tab extends Component{
  constructor(props){
    super(props);
    this.state = {
      activeIndex : 0
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event){
    let index = event.target.getAttribute("data-index");
    this.setState({activeIndex:index})
  }
  render(){
    return (
    <div className={styles.tab}>
      <div className={styles.label} data-active-index={this.state.activeIndex}>
        <NavLink to="/reg" activeClassName={styles.active} data-index="0" onClick={this.handleClick}>注册</NavLink>
        <NavLink to="/login" activeClassName={styles.active} data-index="1" onClick={this.handleClick}>登录</NavLink>
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
    <Redirect exact from='/' to="/reg"/>
  </div>
</Router>
)


export default User;