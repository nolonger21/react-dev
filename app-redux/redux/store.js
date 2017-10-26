    import { createStore } from 'redux';  
    import {addTodo} from './action';
    import reducer from './reducer';

    let store = createStore(reducer);  

    //映射Redux state到组件的属性  
    function mapStateToProps(state) {  
        return { 
            visibleTodos: state.todos
        }
    }  
      
    //映射Redux actions到组件的属性  
    function mapDispatchToProps(dispatch){  
        return{  
            addTodo:(text)=>dispatch(addTodo(text)),
        }  
    }  
 
 export default store;
 export {mapStateToProps,mapDispatchToProps};