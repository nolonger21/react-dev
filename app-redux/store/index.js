    import { createStore } from 'redux';  
    import * as actions from '../action';
    import reducer from '../reducer';

    let store = createStore(reducer);  

    //映射Redux state到组件的属性  
    function mapStateToProps(state) {  
        return { text: state.text }  
    }  
      
    //映射Redux actions到组件的属性  
    function mapDispatchToProps(dispatch){  
        return{  
            onButtonClick:()=>dispatch(actions.buttonClickAction),  
            onChangeText:()=>dispatch(actions.changeTextAction)  
        }  
    }  
 
 export default store;
 export {mapStateToProps,mapDispatchToProps};