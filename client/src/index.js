import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { store } from './redux/store';
import './index.css';
import App from './App';
import GlobalStyle from './global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="536529309790-aa4765f91fm6bebhp1jfhqhs9agj56b6.apps.googleusercontent.com">
    <React.StrictMode>
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
