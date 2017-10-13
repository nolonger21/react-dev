//reducer  
    const initialState = {  
        text1: 'jack,发起攻击lee，庐山升龙霸！' ,
        text2: 'lee,发起攻击jack，天马流星拳！'  
    }  
    const reducer = (state = initialState, action) => {  
        switch (action.type) {  
            case 'BUTTON_CLICK1':  
                return {  
                    text2:'来自jack的攻击，lee,扣血-99999！点击反击！',
                    text1: 'jack,发起攻击lee，庐山升龙霸！' 
                }  
            case 'BUTTON_CLICK2':  
                return {  
                    text1: '来自lee的攻击，jack,扣血-99999！点击反击！',
                    text2: 'lee,发起攻击jack，天马流星拳！' 
                }  
            default:  
                return initialState;  
        }  
    }  

export default reducer;