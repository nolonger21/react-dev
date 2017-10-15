    import React, { Component } from 'react';  
      
    //定义组件  
    class Com extends Component{  
        render() {
            const {onClick1,text1} = this.props;
            return (  
                <div>  
<<<<<<< HEAD:app-redux/components/com.js
                    <button onClick={onClick}>click me2</button>
=======
                    <button onClick={onClick1}>{text1}</button>
>>>>>>> ea4f56b24432341058e7eb1da7445d334307a2de:app-redux/components/com_1.js
                </div>  
            );  
        }  
    }  
      
export default Com;