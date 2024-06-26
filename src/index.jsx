import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from 'react'; 
import { App } from './App.jsx'; 

import { Provider } from 'react-redux'
import { store } from './store.js'
const root = document.getElementById('root');
const app = ReactDOM.createRoot(root);

app.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
);