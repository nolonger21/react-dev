    import React, { Component } from 'react';  
      
    //定义组件  
    class Com extends Component{  
        render() {
            const {onClick1,text1} = this.props;
            return (  
                <div>  
                    <button onClick={onClick1}>{text1}</button>
                </div>  
            );  
        }  
    }  
      
export default Com;