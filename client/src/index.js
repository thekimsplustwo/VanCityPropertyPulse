import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { store } from './redux/store';
import './index.css';
import App from './App';
import GlobalStyle from './global';
import { GOOGLE_CLIENT_ID } from './config';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>
  // </GoogleOAuthProvider>
);
