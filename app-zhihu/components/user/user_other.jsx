    import React, { Component } from 'react';  
    import styles from './css/main.styl';
      
    //定义组件  
    class User_other extends Component{
        constructor(props){
            super(props);
            this.state = {
                text : '下载知乎APP',
                toggle : ''
            }
            this.handleClick = this.handleClick.bind(this);
        }
        handleClick(event){
            let tmp = this.state.text == '下载知乎APP'?'关闭二维码':'下载知乎APP';
            let tmp2 = this.state.toggle == ''?styles.qrcodeshow:'';
            this.setState({
                text:tmp,
                toggle:tmp2
            })
        }
        render() {
            return (  
                <div className={styles.other}>  
                    <button onClick={this.handleClick}>{this.state.text}</button>
                    <div className={styles.qrcode+' '+this.state.toggle}>
                        <div className={styles.qrcodeimage}></div>
                        <div className={styles.qrcodeico}></div>
                    </div>
                </div>  
            );  
        }  
    }  
      
export default User_other;