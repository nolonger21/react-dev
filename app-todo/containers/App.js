import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import store,{mapStateToProps,mapDispatchToProps} from '../store';  
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'

class App extends Component {
  render() {
    const { visibleTodos, visibilityFilter, addTodo,completeTodo,setVisibilityFilter} = this.props;
    return (
      <div>
        <AddTodo onAddClick={addTodo} />
        <TodoList todos={visibleTodos} onTodoClick={completeTodo} />
        <Footer filter={visibilityFilter} onFilterChange={setVisibilityFilter} />
      </div>
    )
  }
}

App.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
export {store};