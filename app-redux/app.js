    import React, { Component } from 'react';  
    import { connect } from 'react-redux';
    import store,{mapStateToProps,mapDispatchToProps} from './redux/store';  
    import Com1 from './components/com_1';
    import Com2 from './components/com_2';
      
      
    //定义组件  
    class App extends Component{  
        render() {  
            const {addTodo,visibleTodos} = this.props;
            return ( 
                <div>  
                    <Com1 onAddClick={addTodo}  />
                    <Com2 todos={visibleTodos}  />
                </div> 
            );  
        }  
    }

    //连接组件  
    export default connect(mapStateToProps, mapDispatchToProps)(App);
    export {store};

