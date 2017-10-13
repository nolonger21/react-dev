    import React, { Component } from 'react';  
    import { connect } from 'react-redux';
    import store,{mapStateToProps,mapDispatchToProps} from './store';  
    import Com1 from './components/com_1';
    import Com2 from './components/com2_2';
      
      
    //定义组件  
    class App extends Component{  
        render() {  
            const {text1,onButtonClick1,text2,onButtonClick2} = this.props;
            return ( 
                <div>  
                    <Com1 onClick1={onButtonClick1} text1={text1}  />
                    <Com2 onClick2={onButtonClick2} text2={text2}  />
                </div> 
            );  
        }  
    }

    //连接组件  
    export default connect(mapStateToProps, mapDispatchToProps)(App);
    export {store};

