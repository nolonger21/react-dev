    import React, { Component } from 'react';  
      
    //定义组件  
    class Com extends Component{  
        render() {
            const {onClick} = this.props;
            return (  
                <div>  
                    <button onClick={onClick}>click me2</button>
                </div>  
            );  
        }  
    }  
      
export default Com;