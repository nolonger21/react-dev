//reducer  
    const initialState = {  
        text: 'Hello'  
    }  
    const reducer = (state = initialState, action) => {  
        switch (action.type) {  
            case 'CHANGE_TEXT':  
                return {  
                    text: state.text=='Hello' ? 'world':'Hello'  
                }  
            case 'BUTTON_CLICK':  
                return {  
                    text: 'Hello world'  
                }  
            default:  
                return initialState;  
        }  
    }  

export default reducer;