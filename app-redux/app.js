    import React, { Component } from 'react';  
    import { connect } from 'react-redux';
    import store,{mapStateToProps,mapDispatchToProps} from './store';  
    import Com from './components/com';  
      
      
    //定义组件  
    class App extends Component{  
        render() {  
            const {text,onChangeText,onButtonClick} = this.props;
            return ( 
                <div>  
                    <h1 onClick={onChangeText}> {text} </h1>  
                    <button onClick={onButtonClick}>click me</button>
                    <Com onClick={onButtonClick} text={text} />
                </div> 
            );  
        }  
    }  

    //连接组件  
    export default connect(mapStateToProps, mapDispatchToProps)(App);
    export {store};

