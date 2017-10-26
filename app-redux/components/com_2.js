    import React, { Component } from 'react';  
      
    //定义组件  
    class Com extends Component{  
        render() {
            return (
            <ul>
                {this.props.todos.map((todo) =>
                    <li>
                        {todo.text}
                    </li>
                )}
            </ul>
            )
        }
    }  
      
export default Com;