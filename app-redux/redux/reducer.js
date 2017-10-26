import { combineReducers } from 'redux';
import {ADD_TODO} from './action';

//reducer  
const todos = (state = [], action) => {  
    switch (action.type) {  
        case ADD_TODO:  
          return [  
            ...state,
            {
                text:action.text
            }
           ]
    default:  
            return state;  
    }  
}

const reducer = combineReducers({
    todos
})

export default reducer;