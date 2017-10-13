    import { createStore } from 'redux';  
    import * as actions from '../action';
    import reducer from '../reducer';

    let store = createStore(reducer);  

    //映射Redux state到组件的属性  
    function mapStateToProps(state) {  
        return { 
            text1: state.text1,
            text2: state.text2
        }
    }  
      
    //映射Redux actions到组件的属性  
    function mapDispatchToProps(dispatch){  
        return{  
            onButtonClick1:()=>dispatch(actions.buttonClickAction1),
            onButtonClick2:()=>dispatch(actions.buttonClickAction2)
        }  
    }  
 
 export default store;
 export {mapStateToProps,mapDispatchToProps};