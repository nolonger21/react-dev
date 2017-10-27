import React, { Component } from 'react';
import styles from './css/main.styl';
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
        <NavLink to="/user-reg" activeClassName={styles.active} data-index="0" onClick={this.handleClick}>注册</NavLink>
        <NavLink to="/user-login" activeClassName={styles.active} data-index="1" onClick={this.handleClick}>登录</NavLink>
        <span></span>
      </div>
    </div>  
    )
  }
}

class Reg extends Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.sub.onsubmit =  () => {
      if(this.tel.value == "" || this.pw.value == "" || this.name.value == ""){
         alert("注册失败，请填写完整！");
         return false;
      }
    }
  }
  render (){
    return (
      <Route path="/user-reg" render={()=>(
        <div className={styles.form}>
          <form method="post" action="server/register.php" ref={sub =>{this.sub = sub}}>
            <div className={styles.reg}>
              <input type="text"  name="name" ref={name =>{this.name = name}} placeholder="姓名" />
              <input type="text"  name="tel" ref={tel =>{this.tel = tel}}  placeholder="手机号 （仅支持中国大陆）" />
              <input type="password"  name="pw" ref={pw =>{this.pw = pw}}  placeholder="密码（不少于6位）" />
            </div>
            <div className={styles.btn}>
              <button type="submit" name="submit" onClick={this.handleClick} >注册知乎</button>
            </div>
          </form>
          <div className={styles.remind}>  
            <p>点击「注册」按钮，即代表你同意<a href="#">《知乎协议》</a></p>
            <div className={styles.regorg}><a href="#">注册机构号</a></div>
          </div>  
        </div>
      )}/>
    )
  }
}

class Login extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.sub.onsubmit =  () => {
      if(this.tel.value == "" || this.pw.value == ""){
         alert("登录名和密码不能为空！");
         return false;
      }
    }
  }
  render(){
    return(
      <Route path="/user-login" render={()=>(
        <div className={styles.form}>
         <form method="post" action="server/login.php" ref={sub =>{this.sub = sub}}>
            <div className={styles.login}>
                <input type="text" name="tel" ref={tel => {this.tel = tel}} placeholder="手机号或邮箱" />
                <input type="text" name="pw" ref={pw => {this.pw = pw}} placeholder="密码" />
            </div>
            <div className={styles.btn}>
              <button type="submit" name="submit" onClick={this.handleClick}>登录</button>
            </div>
         </form>
        </div>
      )}/>
    )
  }
}



const User_main = () => (
<Router>
  <div className={styles.main}>
    <Tab />
    <Reg />
    <Login />
  </div>
</Router>
)


export default User_main;