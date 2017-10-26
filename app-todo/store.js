    import { createStore } from 'redux';  
    import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from './actions'
    import reducers from './reducers';

    let store = createStore(reducers);  

    //映射Redux state到组件的属性  
    
    function selectTodos(todos, filter) {
      switch (filter) {
        case VisibilityFilters.SHOW_ALL:
          return todos
        case VisibilityFilters.SHOW_COMPLETED:
          return todos.filter(todo => todo.completed)
        case VisibilityFilters.SHOW_ACTIVE:
          return todos.filter(todo => !todo.completed)
      }
    }

    function mapStateToProps(state) {
      return {
          visibleTodos: selectTodos(state.todos, state.visibilityFilter),
          visibilityFilter: state.visibilityFilter
      }
    }

    //映射Redux actions到组件的属性  
    function mapDispatchToProps(dispatch){  
        return{  
            addTodo:(text)=>dispatch(addTodo(text)),
            completeTodo:(index)=>dispatch(completeTodo(index)),
            setVisibilityFilter:(nextFilter)=>dispatch(setVisibilityFilter(nextFilter))
        }  
    }  

 
 export default store;
 export {mapStateToProps,mapDispatchToProps};