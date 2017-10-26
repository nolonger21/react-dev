    import React from 'react';  
    import { render }  from 'react-dom';  
    import { Provider} from 'react-redux';
    import App,{store} from './app';  
      

    render(  
        <Provider store={store}>  
            <App />  
        </Provider>,  
        document.getElementById('root')  
    )  

