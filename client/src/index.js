import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom'

import App from './App';
import './index.css'
import { store } from './redux';

const container = document.getElementById('root');
const root = createRoot(container);
root.render( <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>);
