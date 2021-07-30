import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

// Import store configuration
import { configureStore } from './application/store';

// Import root component
import Root from './views';

// Import Global Style
import './styles/style.scss';

ReactDOM.render(
    <React.StrictMode>
        {/* Pass Store Configaration Here */}
        <Provider store={configureStore()}>
            <Root />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
