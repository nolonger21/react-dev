  import React from 'react';
  import { render } from 'react-dom';
  import { Provider } from 'react-redux';
  import App,{store} from './containers/App';
  
    render(  
        <Provider store={store}>  
            <App />  
        </Provider>,  
        document.getElementById('root')  
    )  