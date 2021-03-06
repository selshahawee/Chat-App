import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './reducer/store'
import NavBar from './components/NavBar';



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      
      <BrowserRouter>
        <NavBar/>
        <App />
        </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


