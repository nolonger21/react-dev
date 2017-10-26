    import React, { Component } from 'react';  
      
    //定义组件  
class Com extends Component {
  render() {
    return (
      <div>
        <input type='text' ref='input' />
        <button onClick={()=>{this.handleClick()}}>
          Add
        </button>
      </div>
    )
  }

  handleClick() {
    const node = this.refs.input
    const text = node.value.trim()
    this.props.onAddClick(text)
    node.value = ''
  }
}

export default Com;
