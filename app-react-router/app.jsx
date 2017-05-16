import React from 'react'
import {
  HashRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom'

const Links = () => (
  <nav>
    <NavLink to="/" exact  activeStyle={{ color: 'green'}}>Home</NavLink> 
    <NavLink to="/about"   activeStyle={{ color: 'green'}}>About</NavLink> 
    <NavLink to="/contact"   activeStyle={{ color: 'green'}}>Contact</NavLink> 
    <NavLink to="/nested"   activeStyle={{ color: 'green'}}>Nested</NavLink> 
  </nav>
)

const App = () => (
  <Router>
    <div>
      <Links />
      <Route exact path="/" render={() => <h1>Home</h1>} />
      <Route path="/about" render={() => <h1>About</h1>} />
      <Route path="/contact" render={() => <h1>Contact</h1>} />
      <Route path="/nested" render={Nested} />
    </div>
  </Router>
)

const Nested = () => (
  <div>
    <Link to="/nested/one">One</Link>
    <Link to="/nested/two">Two</Link>
    <Link replace to="/nested/Three">Three</Link>
    <div>选择一个点击</div>
    <Route path="/nested/:minooo?" render={({match}) => <h2>URL: {match.params.minooo || 'minooo'}</h2>} />
  </div>
)

export default App;