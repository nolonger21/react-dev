import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom'

const Links = () => (
  <nav>
    <ul>
      <li><NavLink to="/" exact  activeStyle={{ color: 'green'}}>Home</NavLink></li>
      <li><NavLink to="/public"  activeStyle={{ color: 'green'}}>public</NavLink></li>
      <li><NavLink to="/login"   activeStyle={{ color: 'green'}}>login</NavLink></li>
    </ul>
  </nav>
)

const App = () => (
  <Router>
    <div>
      <Links />
      <Route exact path="/" render={() => <h1>Home</h1>} />
      <Route path="/public" render={() => <h1>公开的页面</h1>} />
      <Route path="/login" render={() => (
        <div>
          <h1>若想要访问非公开页面，请先</h1>
          <button onClick={this.login}>登录</button>
        </div>
        )}
        />
      <Route path="/protected" render={() => <h1>非公开的页面</h1>} />
    </div>
  </Router>
)
export default App;